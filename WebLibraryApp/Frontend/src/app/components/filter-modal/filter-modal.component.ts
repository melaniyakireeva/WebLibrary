import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { TuiButton, TuiIcon, type TuiDialogContext } from '@taiga-ui/core';
import { Observable } from 'rxjs';
import { AndFilter, IFilter, NumberFilterOperation, OrFilters, StringFilterOperation } from '../../services/filters/filterOperations';
import { TuiTree } from '@taiga-ui/kit';
import { FilterConverter, TreeNode } from '../../services/filters/filter-converter';
import { EMPTY_ARRAY, TuiHandler } from '@taiga-ui/cdk';
import { CommonModule, NgClass, NgIf, NgStyle } from '@angular/common';
import { FilterEditorComponent } from '../filter-editor/filter-editor.component';
import _ from 'lodash';

@Component({
  selector: 'app-filter-modal',
  standalone: true,
  imports: [
    TuiTree,
    TuiButton,
    TuiIcon,
    NgClass,
    FilterEditorComponent,
    NgIf,
    CommonModule,
  ],
  templateUrl: './filter-modal.component.html',
  styleUrl: './filter-modal.component.scss',
})
export class FilterModalComponent implements OnInit {
  data: TreeNode | undefined | null = undefined;
  focusElement: TreeNode | undefined | null = undefined;
  private cdRef: ChangeDetectorRef;

  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
  }

  ngOnInit(): void {
    this.refreshData();
  }

  onAddAndFilter() {
    if (!_.isNil(this.focusElement?.children)) {
      if (this.focusElement.value.$type === 'AndFilter') {
        const filter: AndFilter = this.focusElement.value as AndFilter;
        filter.filters.push(new AndFilter());
        this.refreshData();
      } else if (this.focusElement.value.$type === 'OrFilter') {
        const filter: OrFilters = this.focusElement.value as OrFilters;
        filter.filters.push(new AndFilter());
        this.refreshData();
      }
    }
  }

  onDeleteFilter(val: TreeNode) {
    if (!_.isNil(val?.parent?.value)) {
      const filters = (val.parent.value as any)['filters'];
      _.pull(filters, val.value);
      this.refreshData();
    }
  }

  onAddOrFilter() {
    if (!_.isNil(this.focusElement?.children)) {
      if (this.focusElement.value.$type === 'AndFilter') {
        const filter: AndFilter = this.focusElement.value as AndFilter;
        filter.filters.push(new OrFilters());
        this.refreshData();
      } else if (this.focusElement.value.$type === 'OrFilter') {
        const filter: OrFilters = this.focusElement.value as OrFilters;
        filter.filters.push(new OrFilters());
        this.refreshData();
      }
    }
  }

  onAddStringFilter() {
    if (!_.isNil(this.focusElement?.children)) {
      if (this.focusElement.value.$type === 'AndFilter') {
        const filter: AndFilter = this.focusElement.value as AndFilter;
        filter.filters.push(new StringFilterOperation());
        this.refreshData();
      } else if (this.focusElement.value.$type === 'OrFilter') {
        const filter: OrFilters = this.focusElement.value as OrFilters;
        filter.filters.push(new StringFilterOperation());
        this.refreshData();
      }
    }
  }

  onAddNumberFilter() {
    if (!_.isNil(this.focusElement?.children)) {
      if (this.focusElement.value.$type === 'AndFilter') {
        const filter: AndFilter = this.focusElement.value as AndFilter;
        filter.filters.push(new NumberFilterOperation());
        this.refreshData();
      } else if (this.focusElement.value.$type === 'OrFilter') {
        const filter: OrFilters = this.focusElement.value as OrFilters;
        filter.filters.push(new NumberFilterOperation());
        this.refreshData();
      }
    }
  }

  refreshData() {
    this.data = FilterConverter.convertToTree(this.context.data.initFilter);
  }

  onFocusTreeElement(elem: TreeNode) {
    if (this.focusElement === elem) {
      this.focusElement = undefined;
    } else {
      this.focusElement = elem;
    }
    this.cdRef.markForCheck();
  }

  public readonly context =
    injectContext<
      TuiDialogContext<IFilter, { columns: string[]; initFilter: IFilter }>
    >();

  protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = (
    item
  ) => item.children || EMPTY_ARRAY;

  protected submit(): void {
    this.context.completeWith(this.context.data.initFilter);
  }
}

