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
import { Genre, GenreService, ParametersData } from '../../services/parameters/ekb-parameters.service';
import { ParametersCardComponent } from '../parameters-card/parameters-card.component';

@Component({
  selector: 'app-parameters-page',
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
  templateUrl: './parameters-page.component.html',
  styleUrl: './parameters-page.component.scss',
})
export class ParametersPageComponent implements OnInit {
  readonly ITEMS_PER_PAGE_LIST: number[] = [10, 20, 50];
  item_per_page: number = 20;

  @Input() data!: (filter: BaseFilter) => Observable<ParametersData>;

  converter: any = FilterConverter;

  constructor(
    private cdRef: ChangeDetectorRef,
    private parametersService: GenreService,
    private csvGenerator: CsvHelperService
  ) {
    this.data = (filter: BaseFilter) => {
      return this.parametersService.getParameters(filter);
    };
  }

  ngOnInit(): void {
    this.updateFilterParams();
  }

  private readonly addManufacturer = tuiDialog(ParametersCardComponent, {
    dismissible: true,
    label: 'Добавить жанр',
    size: 'm',
  });

  currentData$!: Observable<ParametersData>;

  readonly columnsType: string[] = ['Id', 'Name'];

  protected initial: readonly string[] = ['Id', 'Name'];

  protected enabled = this.initial;

  columnForSort: string = '';

  filterNameVal: string = '';
  index: number = 0;
  length: number = 0;
  isLoading: boolean = false;
  shownData: Genre[] = [];

  protected goToPage(index: number): void {
    this.index = index;
    this.updateFilterParams();
  }

  onFilterNameChangeDebounce = _.debounce(
    (x) => this.onFilterNameChange(x),
    300
  );

  onAddParameter() {
    this.addManufacturer({}).subscribe((x) => {
      this.parametersService.saveParameter(x).subscribe((y) => {
        this.updateFilterParams();
        this.cdRef.markForCheck();
      });
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
      filterOperation.filterColumn = 'Name';
      filterOperation.operation = FilterOperations.Contains;
      filterOperation.valueForComparison = this.filterNameVal;
      fullFilter.filters.push(filterOperation);
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
