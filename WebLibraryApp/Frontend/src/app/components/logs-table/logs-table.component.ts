import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiReorder, TuiTable } from '@taiga-ui/addon-table';
import {
  TuiAlertService,
  TuiAutoColorPipe,
  TuiButton,
  tuiDialog,
  TuiDialogService,
  TuiDropdown,
  TuiIcon,
  TuiInitialsPipe,
  TuiLink,
  TuiLoader,
  TuiRoot,
  TuiScrollbar,
  TuiTextfield,
  TuiTitle,
} from '@taiga-ui/core';
import {
  TUI_CONFIRM,
  TuiAvatar,
  TuiBadge,
  TuiCheckbox,
  TuiChevron,
  TuiChip,
  TuiConfirmData,
  TuiDataListWrapper,
  TuiItemsWithMore,
  TuiPagination,
  TuiProgressBar,
  TuiRadioList,
  TuiStatus,
  TuiTooltip,
} from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';
import { TuiSelectModule } from '@taiga-ui/legacy';
import { TuiLet } from '@taiga-ui/cdk';
import _ from 'lodash';
import { BaseFilter, Paging, SortInfo } from '../../services/filters/filters';
import { Observable, shareReplay, tap } from 'rxjs';
import {
  AndFilter,
  FilterOperations,
  IFilter,
  StringFilterOperation,
} from '../../services/filters/filterOperations';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import { FilterConverter } from '../../services/filters/filter-converter';
import { ManufactureCardEditComponent } from '../manufacture-card-edit/manufacture-card-edit.component';
import { CsvHelperService } from '../../services/csv-helper/csv-helper.service';
import {
  Genre,
  GenreService,
  ParametersData,
} from '../../services/parameters/ekb-parameters.service';
import { ParametersCardComponent } from '../parameters-card/parameters-card.component';
import {
  AuditService,
  LogEntry,
  LogsData,
} from '../../services/audit/audit.service';

@Component({
  selector: 'app-logs-table',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    AsyncPipe,
    TuiAutoColorPipe,
    TuiAvatar,
    TuiBadge,
    TuiLoader,
    TuiButton,
    TuiCell,
    TuiCheckbox,
    TuiChip,
    TuiSelectModule,
    TuiDataListWrapper,
    ManufactureCardEditComponent,
    TuiRoot,
    ReactiveFormsModule,
    TuiChip,
    TuiScrollbar,
    TuiLet,
    TuiInitialsPipe,
    TuiTextfield,
    TuiTooltip,
    TuiDropdown,
    TuiReorder,
    TuiChevron,
    TuiIcon,
    TuiInitialsPipe,
    TuiItemsWithMore,
    TuiLink,
    TuiProgressBar,
    TuiRadioList,
    TuiStatus,
    TuiTable,
    TuiTitle,
    TuiPagination,
  ],
  templateUrl: './logs-table.component.html',
  styleUrl: './logs-table.component.scss',
})
export class LogsTableComponent implements OnInit {
  readonly ITEMS_PER_PAGE_LIST: number[] = [10, 20, 50];
  item_per_page: number = 20;

  @Input() data!: (filter: BaseFilter) => Observable<LogsData>;

  private readonly filterDialog = tuiDialog(FilterModalComponent, {
    dismissible: true,
    label: 'Фильтр по логам',
    size: 'auto',
  });

  converter: any = FilterConverter;

  constructor(
    private cdRef: ChangeDetectorRef,
    private auditService: AuditService
  ) {
    this.data = (filter: BaseFilter) => {
      return this.auditService.getLogsByFilter(filter);
    };
  }

  ngOnInit(): void {
    this.updateFilterParams();
  }

  currentData$!: Observable<LogsData>;

  readonly columnsType: string[] = ['Id', 'Message', 'Date', 'Level'];

  columnForSort: string = '';

  filterNameVal: string = '';
  index: number = 0;
  length: number = 0;
  isLoading: boolean = false;
  shownData: Genre[] = [];

  protected hasFilter: boolean = false;

  customFilters: IFilter = new AndFilter();

  protected goToPage(index: number): void {
    this.index = index;
    this.updateFilterParams();
  }

  onFilterNameChangeDebounce = _.debounce(
    (x) => this.onFilterNameChange(x),
    300
  );

  onAddFilter() {
    this.filterDialog({
      columns: this.columnsType,
      initFilter: FilterConverter.copyFilter(this.customFilters),
    }).subscribe((x) => {
      this.customFilters = x;
      this.hasFilter = !FilterConverter.isEmptyFilter(x);
      this.updateFilterParams();
      this.cdRef.markForCheck();
    });
  }

  onFilterNameChange(event: any) {
    this.updateFilterParams();
  }

  updateFilterParams() {
    let filter: BaseFilter = {
      paging: null,
      scopeParams: null,
      sortInfo: null,
      filterOperations: null,
    };

    filter.paging = <Paging>{
      pageIndex: this.index,
      itemsPerPage: this.item_per_page,
    };

    const fullFilter = new AndFilter();
    if (!_.isEmpty(this.filterNameVal)) {
      const filterOperation: StringFilterOperation =
        new StringFilterOperation();
      filterOperation.filterColumn = 'Message';
      filterOperation.operation = FilterOperations.Contains;
      filterOperation.valueForComparison = this.filterNameVal;
      fullFilter.filters.push(filterOperation);
    }

    if (!_.isNil(this.customFilters)) {
      fullFilter.filters.push(this.customFilters);
    }

    filter.filterOperations = fullFilter;

    if (
      this.columnForSort !== 'Нет' &&
      this.columnsType.includes(this.columnForSort)
    ) {
      filter.sortInfo = <SortInfo>{
        sortColumn: this.columnForSort,
        isDescending: false,
      };
    }

    this.isLoading = true;

    this.currentData$ = this.data(filter).pipe(
      tap((x) => {
        this.isLoading = false;
        this.length = Math.ceil(x.totalCount / this.item_per_page);
        if (this.length > 0) {
          this.index = Math.min(this.index, this.length - 1);
        } else {
          this.index = 0;
        }
      }),
      shareReplay(1)
    );
  }

  onSortColumnChange(event: any) {
    this.updateFilterParams();
  }

  onPageAmountChanged() {
    this.index = 0;
    this.updateFilterParams();
  }

  resetShownData(newData: Genre[]) {
    this.length = Math.ceil(newData.length / this.item_per_page);
    this.index = 0;
    this.shownData = newData.slice(0, this.item_per_page);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const dataChange = changes['data'];
    if (dataChange) {
      this.updateFilterParams();
    }
  }
}
