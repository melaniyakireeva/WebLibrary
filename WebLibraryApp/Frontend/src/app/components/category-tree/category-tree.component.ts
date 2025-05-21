import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { TuiHandler } from '@taiga-ui/cdk';
import { EMPTY_ARRAY, TuiMapperPipe } from '@taiga-ui/cdk';
import { TuiLabel } from '@taiga-ui/core';
import { TuiCheckbox, TuiTree } from '@taiga-ui/kit';
import { CategoryService } from '../../services/category/category.service';
import _ from 'lodash';

interface TreeNode {
  children?: TreeNode[];
  readonly text: string;
  readonly categoryId: number;
}

function flatten(item: TreeNode): readonly TreeNode[] {
  return item.children
    ? item.children
        .map(flatten)
        .reduce((arr, oldVal) => [...arr, ...oldVal], [item])
    : [item];
}

@Component({
  selector: 'app-category-tree',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    TuiCheckbox,
    TuiLabel,
    TuiMapperPipe,
    TuiTree,
  ],
  templateUrl: './category-tree.component.html',
  styleUrl: './category-tree.component.scss',
})
export class CategoryTreeComponent implements OnInit {
  @Output() selectedIds: EventEmitter<number[]> = new EventEmitter<number[]>();

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((categoryArr) => {
      let dict: Record<number, TreeNode> = {};
      dict[-1] = <TreeNode>{
        categoryId: -1,
        text: 'root',
        children: [],
      };

      for (let category of categoryArr) {
        dict[category.id] = <TreeNode>{
          categoryId: category.id,
          text: category.name,
          children: [],
        };
        this.map.set(category.id, false);
      }

      for (let category of categoryArr) {
        let parent = category.parentId ? dict[category.parentId] : dict[-1];
        if (!_.isNil(parent.children)) {
          parent.children.push(dict[category.id]);
        } else {
          parent.children = [dict[category.id]];
        }
      }

      this.data = dict[-1];
      this.cdRef.markForCheck();
    });
  }

  constructor(
    private categoryService: CategoryService,
    private cdRef: ChangeDetectorRef
  ) {}

  protected map = new Map<number, boolean>();

  protected data: TreeNode = {
    categoryId: -1,
    text: 'root',
    children: []
  };

  protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = (
    item
  ) => item.children || EMPTY_ARRAY;

  protected readonly getValue = (
    item: TreeNode,
    map: Map<number, boolean>
  ): boolean | null => {
    let result: boolean | null = null;
    const flat = flatten(item);
    const key = flat[0]!;

    if (key) {
      result = !!map.get(key.categoryId);
    }

    for (const item of flat) {
      if (result !== !!map.get(item.categoryId)) {
        return null;
      }
    }

    return result;
  };

  protected onChecked(node: TreeNode, value: boolean): void {
    flatten(node).forEach((item) => this.map.set(item.categoryId, value));

    this.map = new Map(this.map.entries());

    const selectedIds = [...this.map.entries()].filter(x => x[1]).map(x => x[0]);

    this.selectedIds.emit(selectedIds);
  }
}
