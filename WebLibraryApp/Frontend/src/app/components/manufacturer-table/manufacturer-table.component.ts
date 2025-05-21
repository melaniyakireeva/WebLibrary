import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnChanges,
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
import {
  GetManufacturersResponse,
  Author,
  AuthorsData,
  AuthorService,
} from '../../services/author/author-service.service';
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
import { ManufacturerCardComponent } from '../manufacturer-card/manufacturer-card.component';
import { ManufactureCardEditComponent } from '../manufacture-card-edit/manufacture-card-edit.component';
import { CsvHelperService } from '../../services/csv-helper/csv-helper.service';
import { AccountInfo, AuthService } from '../../services/auth/auth-service.service';

@Component({
  standalone: true,
  selector: 'app-manufacturer-table',
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
  templateUrl: './manufacturer-table.component.html',
  styleUrls: ['./manufacturer-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManufacturerTableComponent implements OnChanges {
  private readonly dialogs = inject(TuiDialogService);

  readonly ITEMS_PER_PAGE_LIST: number[] = [10, 20, 50];
  item_per_page: number = 20;

  @Input() data!: (filter: BaseFilter) => Observable<AuthorsData>;

  protected readonly accountInfo!: AccountInfo | undefined;

  private readonly filterDialog = tuiDialog(FilterModalComponent, {
    dismissible: true,
    label: 'Фильтр по авторам',
    size: 'auto',
  });

  private readonly cardDialog = tuiDialog(ManufacturerCardComponent, {
    dismissible: true,
    label: 'Карточка автора',
    size: 'auto',
  });

  private readonly editManufacturer = tuiDialog(ManufactureCardEditComponent, {
    dismissible: true,
    label: 'Редактировать автора',
    size: 'auto',
  });

  private readonly addManufacturer = tuiDialog(ManufactureCardEditComponent, {
    dismissible: true,
    label: 'Добавить автора',
    size: 'auto',
  });

  converter: any = FilterConverter;

  constructor(
    private cdRef: ChangeDetectorRef,
    private manufactureService: AuthorService,
    private csvGenerator: CsvHelperService,
    private authService: AuthService
  ) {
    this.accountInfo = this.authService.getUserInfo();
  }

  currentData$!: Observable<AuthorsData>;

  readonly columnsType: string[] = [
    'Id',
    'Name',
    'Surname',
    'Patronym'
  ];

  protected hasFilter: boolean = false;

  columnForSort: string = '';

  filterNameVal: string = '';
  index: number = 0;
  length: number = 0;
  isLoading: boolean = false;
  shownData: Author[] = [];

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

  onAddManufacturer() {
    this.addManufacturer({}).subscribe((x) => {
      this.manufactureService.saveAuthor(x).subscribe((y) => {
        this.updateFilterParams();
        this.cdRef.markForCheck();
      });
    });
  }

  createFilter(): BaseFilter {
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

    return filter;
  }

  onExportCsvManufacturer() {
    const filter = this.createFilter();
    filter.paging = null;
    const obs$ = this.data(filter);

    obs$.subscribe((data) => {
      const csvStr = this.csvGenerator.generateCsv(data.items);
      var downloadLink = document.createElement('a');
      var blob = new Blob(['\ufeff', csvStr]);
      var url = URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.download = 'authors.csv';

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  onOpenManufactureCard(item: Author) {
    this.cardDialog({ manufactureInfo: item }).subscribe((x) => {});
  }

  onOpenManufactureCardEdit(item: Author) {
    this.editManufacturer({ authorInfo: item }).subscribe((x) => {
      this.manufactureService.saveAuthor(x).subscribe((y) => {
        this.updateFilterParams();
        this.cdRef.markForCheck();
      });
    });
  }

  onDeleteManufacturer(item: Author) {
    const data: TuiConfirmData = {
      yes: 'Да',
      no: 'Отмена',
    };

    this.dialogs
      .open<boolean>(TUI_CONFIRM, {
        label: 'Вы уверены что хотите удалить данного автора?',
        size: 's',
        data,
      })
      .subscribe((x) => {
        if (x) {
          this.manufactureService
            .deleteAuthor(item.id ?? -1)
            .subscribe((x) => {
              if (x) {
                this.updateFilterParams();
              }
            });
        }
      });
  }

  onFilterNameChange(event: any) {
    this.updateFilterParams();
  }

  updateFilterParams() {
    const filter = this.createFilter();

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

  resetShownData(newData: Author[]) {
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
