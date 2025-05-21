import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EkbTableService } from '../../services/ekb-table/ekb-table.service';
import { AuthorService } from '../../services/author/author-service.service';
import { BaseFilter, Paging } from '../../services/filters/filters';
import { AsyncPipe, NgIf } from '@angular/common';
import { TuiRingChart } from '@taiga-ui/addon-charts';
import { CategoryService } from '../../services/category/category.service';
import _ from 'lodash';
import { TuiTabs } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { TuiAxes, TuiBarChart } from '@taiga-ui/addon-charts';
import type { TuiContext } from '@taiga-ui/cdk';
import { tuiFormatNumber, TuiHint } from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit';
import { TuiSelectModule } from '@taiga-ui/legacy';

let that: any = {};

@Component({
  selector: 'app-analytics-page',
  standalone: true,
  imports: [
    TuiRingChart,
    TuiTabs,
    NgIf,
    FormsModule,
    TuiBarChart,
    TuiDataListWrapper,
    TuiHint,
    TuiAxes,
    TuiSelectModule,
  ],
  templateUrl: './analytics-page.component.html',
  styleUrl: './analytics-page.component.scss',
})
export class AnalyticsPageComponent implements OnInit {
  ekbElementsCount: number = 0;
  manufacturersCount: number = 0;

  tabSelectedElement: number = 0;

  protected labels: string[] = [];
  protected labelsY: string[] = [];
  protected value: number[] = [];
  protected total = 0;
  protected max: number = 0;

  protected barValues: number[][] = [];
  protected index = NaN;

  protected get sum(): number {
    return (
      (Number.isNaN(this.index) ? this.total : this.value[this.index]) ?? 0
    );
  }

  protected get label(): string {
    return (Number.isNaN(this.index) ? 'всего' : this.labels[this.index]) ?? '';
  }

  constructor(
    private ekbService: EkbTableService,
    private manufactureService: AuthorService,
    private categoryService: CategoryService,
    private cdRef: ChangeDetectorRef
  ) {
    that = this;
  }

  ngOnInit(): void {
    const paging: Paging = {
      pageIndex: 0,
      itemsPerPage: 1,
    };

    const emptyFilter: BaseFilter = {
      paging: paging,
      scopeParams: null,
      sortInfo: null,
      filterOperations: null,
    };

    this.ekbService.getEkbElements(emptyFilter).subscribe((x) => {
      this.ekbElementsCount = x.totalCount;
      this.cdRef.markForCheck();
    });

    this.categoryService.getElementsPerCategory().subscribe((x) => {
      this.labels = _.keys(x);
      this.value = _.map(this.labels, (key) => x[key]);
      this.total = _.sum(this.value);
      this.labelsY = [];
      this.max = Math.max(...this.value);
      let step = Math.floor(this.max / 10);
      for (let i = 0; i <= 10; i++) {
        this.labelsY.push((i * step).toString());
      }

      this.barValues.push(this.value);

      this.cdRef.markForCheck();
    });

    this.manufactureService.getAuthors(emptyFilter).subscribe((x) => {
      this.manufacturersCount = x.totalCount;
      this.cdRef.markForCheck();
    });
  }

  hint = ({ $implicit }: TuiContext<number>): string => {
    const label = this.labels[$implicit];
    return `${label}: ${this.value[$implicit]}`;
  }
}