import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import type { ValidatorFn } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { WaIntersectionObserver } from '@ng-web-apis/intersection-observer';
import type { TuiComparator } from '@taiga-ui/addon-table';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiDay, tuiDefaultSort, TuiLet, TuiValidator } from '@taiga-ui/cdk';
import {
  TuiButton,
  tuiDialog,
  TuiDialogContext,
  TuiDialogService,
  TuiFormatNumberPipe,
  TuiHint,
  TuiIcon,
  TuiLoader,
  TuiScrollbar,
  TuiTextfield,
} from '@taiga-ui/core';
import {
  TUI_CONFIRM,
  TuiChip,
  TuiConfirmData,
  TuiDataListWrapper,
  TuiLike,
  TuiPagination,
  TuiStatus,
} from '@taiga-ui/kit';
import {
  TuiInputDateModule,
  TuiInputNumberModule,
  TuiSelectModule,
  TuiTextareaModule,
} from '@taiga-ui/legacy';
import { CategoryTreeComponent } from '../category-tree/category-tree.component';
import {
  EkbElementDto,
  EkbTableService,
  GetEkbElementsResponse,
} from '../../services/ekb-table/ekb-table.service';
import { combineLatest, map, Observable, of, shareReplay, switchMap, tap } from 'rxjs';
import _ from 'lodash';
import { BaseFilter, Paging } from '../../services/filters/filters';
import {
  AndFilter,
  FilterOperations,
  IFilter,
  MultipleNumberFilterOperation,
  StringFilterOperation,
} from '../../services/filters/filterOperations';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import { FilterConverter } from '../../services/filters/filter-converter';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { TableColumnEditorComponent } from '../table-column-editor/table-column-editor.component';
import { FilesUploaderService } from '../../services/files/files-uploader.service';
import { FileWorkerService } from '../../services/fileworker/file-worker.service';
import { ElectronicCardComponent } from '../electronic-card/electronic-card.component';
import { LoadCsvElementsComponent } from '../load-csv-elements/load-csv-elements.component';
import { CsvHelperService } from '../../services/csv-helper/csv-helper.service';
import {
  AccountInfo,
  AuthService,
} from '../../services/auth/auth-service.service';
import {
  ElementToReferenceComponent,
  ReferenceListItem,
} from '../element-to-reference/element-to-reference.component';
import {
  References,
  ReferenceService,
} from '../../services/reference/reference.service';
import { LlmLogicService } from '../../services/llm-logic/llm-logic.service';

@Component({
  selector: 'app-electronic-table',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    NgForOf,
    NgIf,
    TuiSelectModule,
    TuiTextfield,
    TuiDataListWrapper,
    TuiButton,
    TuiDataListWrapper,
    TuiFormatNumberPipe,
    CategoryTreeComponent,
    TuiChip,
    TuiIcon,
    TuiPagination,
    TuiInputDateModule,
    TuiInputNumberModule,
    TuiLoader,
    TuiLet,
    TuiScrollbar,
    TuiTable,
    TuiLike,
    TuiStatus,
    TuiTextareaModule,
    TuiValidator,
    TableColumnEditorComponent,
    TuiHint,
    WaIntersectionObserver,
  ],
  templateUrl: './electronic-table.component.html',
  styleUrl: './electronic-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElectronicTableComponent implements OnInit {
  @Input() showOperations: boolean = true;
  @Input() data!: (filter: BaseFilter) => Observable<GetEkbElementsResponse>;

  private readonly dialogs = inject(TuiDialogService);

  sortColumns: string[] = ['Id'];
  protected properties: string[] = [];
  protected shownProperties: string[] = [];

  protected currentData$: Observable<any[]> = of([]);
  protected isLoading: boolean = false;
  protected index: number = 0;
  protected length: number = 0;

  protected filterText: string = '';

  item_per_page: number = 20;

  columnForSort: string = '';

  private readonly elementToReferenceDialog = tuiDialog(
    ElementToReferenceComponent,
    {
      dismissible: true,
      label: 'Добавление элементов в справочник',
      size: 'auto',
    }
  );

  private readonly filterDialog = tuiDialog(FilterModalComponent, {
    dismissible: true,
    label: 'Фильтр по компонентам',
    size: 'auto',
  });

  private readonly cardDialog = tuiDialog(ElectronicCardComponent, {
    dismissible: true,
    label: 'Карточка компонента',
    size: 'auto',
  });

  private readonly csvFinderDialog = tuiDialog(LoadCsvElementsComponent, {
    dismissible: true,
    label: 'Поиск по CSV',
    size: 'auto',
  });

  protected readonly accountInfo!: AccountInfo | undefined;

  readonly ITEMS_PER_PAGE_LIST: number[] = [10, 20, 50];

  filterNameVal: string = '';

  selectedCategories?: number[];

  customFilters: IFilter = new AndFilter();

  filterFromLlm: IFilter = new AndFilter();

  converter: any = FilterConverter;

  filterResult: string = '';

  protected hasFilter: boolean = false;

  constructor(
    private fileService: FilesUploaderService,
    private fileWorker: FileWorkerService,
    private ekbService: EkbTableService,
    private authService: AuthService,
    private referenceService: ReferenceService,
    private csvGenerator: CsvHelperService,
    private llmService: LlmLogicService,
    private cdRef: ChangeDetectorRef
  ) {
    this.accountInfo = this.authService.getUserInfo();
  }

  protected showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogs
      .open(content, { label: 'Расположение колонок', size: 'l' })
      .subscribe();
  }

  sendFilterText(){
    this.llmService.generateFilter(this.filterText).subscribe(x => {
      this.filterResult = JSON.stringify(x?.['filter']?.['filter']?.['where']);
      this.filterFromLlm = FilterConverter.getFilterFromObj(
        x['filter']['filter']['where'],
        this.properties
      ) ?? new AndFilter();
      this.updateFilterParams();
      this.cdRef.markForCheck();
    });
  }

  onExportCsvEkb() {
    const filter = this.createFilter();
    filter.paging = null;
    const obs$ = this.ekbService
      .getEkbElements(filter)
      .pipe(map((elements) => _.map(elements.items, this.convertToEkb)));
    obs$.subscribe((data) => {
      const dataVals = _.map(data, (x) => x.data);
      const csvStr = this.csvGenerator.generateCsv(dataVals);
      var downloadLink = document.createElement('a');
      var blob = new Blob(['\ufeff', csvStr]);
      var url = URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.download = 'ekb_elements.csv';

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  onCsvFilter() {
    this.csvFinderDialog().subscribe((x) => {});
  }

  onOpenElementCard(elem: any) {
    this.cardDialog(elem).subscribe((x) => {});
  }

  onAddReference(elem: any) {
    this.referenceService
      .getUserReference(this.accountInfo?.userId ?? -1)
      .pipe(
        switchMap((references) => {
          return this.referenceService.getReferencesPerElement(
            this.accountInfo?.userId ?? -1,
            elem.data.Id
          ).pipe(
            map(ekbReferences => {
              return [references, ekbReferences];
            })
          );
        })
      )
      .subscribe(([references, ekbReferences]) => {
        this.elementToReferenceDialog({
          selectedReferences: _.map(
            ekbReferences.items,
            (x) => new ReferenceListItem(x)
          ),
          userReferences: _.map(
            references.items,
            (x) => new ReferenceListItem(x)
          ),
        }).subscribe(({selectedReferences, userReferences}) => {
          const removedReferences: number[] = _.difference(
            userReferences,
            selectedReferences
          );
          const referenceObs$ = [
            this.referenceService.saveElementToReference(
              elem.modelRef.id,
              selectedReferences
            ),
            this.referenceService.deleteElementFromReference(
              elem.modelRef.id,
              removedReferences
            ),
          ];
          combineLatest(referenceObs$).subscribe(([isSaveResult, isDeleteResult]) => {
            if (isSaveResult && isDeleteResult) {
              const data: TuiConfirmData = {
                yes: 'Да',
                no: 'Отмена',
              };

              this.dialogs
                .open<boolean>(TUI_CONFIRM, {
                  label: 'Элемент добавлен в справочники',
                  size: 's',
                  data,
                })
                .subscribe((x) => {});
            } else {
              const data: TuiConfirmData = {
                yes: 'Да',
                no: 'Отмена',
              };

              this.dialogs
                .open<boolean>(TUI_CONFIRM, {
                  label: 'Ошибка при добавлении',
                  size: 's',
                  data,
                })
                .subscribe((x) => {});
            }
          });
        });
      });
  }

  onOpenElementCardEdit(elem: any) {}

  onAddElement() {}

  onColumnChanged(newColumns: string[]) {
    this.shownProperties = newColumns;
  }

  onSelectedCategoryChanged($event: number[]) {
    if (_.isEmpty($event)) {
      this.selectedCategories = undefined;
    } else {
      this.selectedCategories = $event;
    }
    this.updateFilterParams();
  }

  onAddFilter() {
    this.filterDialog({
      columns: this.sortColumns,
      initFilter: FilterConverter.copyFilter(this.customFilters),
    }).subscribe((x) => {
      this.customFilters = x;
      this.hasFilter = !FilterConverter.isEmptyFilter(x);
      this.updateFilterParams();
      this.cdRef.markForCheck();
    });
  }

  loadFile(id: number) {
    this.fileService
      .getFile(id)
      .pipe(
        tap((file) => {
          var a = document.createElement('a');
          const mimeType = this.fileWorker.getFileMimeType(file.fileName);
          a.href = `data:${mimeType};base64,` + file.fileData;
          a.download = file.fileName;
          a.click();
          a.remove();
        })
      )
      .subscribe((x) => {});
  }

  convertToEkb(ekbElement: EkbElementDto): {
    data: Record<string, any>;
    modelRef: EkbElementDto;
  } {
    let result: Record<string, any> = {};
    result['Id'] = ekbElement.id;
    result['Файл'] = ekbElement.fileModelId;
    result[
      'Производитель'
    ] = `${ekbElement.manufacturer?.id} ${ekbElement.manufacturer?.name}`;
    result[
      'Калькодержатель'
    ] = `${ekbElement.traceHolder?.id} ${ekbElement.traceHolder?.name}`;
    result['Категория'] = ekbElement.ekbCategory?.name ?? 'Не известно';
    for (let ekbProp of ekbElement.properties) {
      result[ekbProp.propertyName] = ekbProp.value;
    }
    return {
      data: result,
      modelRef: ekbElement,
    };
  }

  ngOnInit(): void {
    this.updateFilterParams();
  }

  onSortColumnChange(event: any) {
    this.updateFilterParams();
  }

  onFilterNameChange(event: any) {
    this.updateFilterParams();
  }

  onFavouriteChange(elem: any, flag: any) {
    const ekbId: number = elem.data['Id'];
    const userId: number = this.authService.getUserInfo()?.userId ?? -1;
    this.ekbService
      .markElementAsFavourite(ekbId, userId, flag.target.checked)
      .subscribe((x) => {});
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

    if (!_.isEmpty(this.columnForSort)) {
      filter.sortInfo = {
        isDescending: false,
        sortColumn: this.columnForSort,
      };
    }

    const fullFilter = new AndFilter();
    if (!_.isEmpty(this.filterNameVal)) {
      const filterOperation: StringFilterOperation =
        new StringFilterOperation();
      filterOperation.filterColumn = 'Условное обозначение изделия';
      filterOperation.operation = FilterOperations.Contains;
      filterOperation.valueForComparison = this.filterNameVal;
      fullFilter.filters.push(filterOperation);
    }

    if (!_.isNil(this.selectedCategories)) {
      const filterOperation: MultipleNumberFilterOperation =
        new MultipleNumberFilterOperation();
      filterOperation.filterColumn = 'Категория';
      filterOperation.operation = FilterOperations.Contains;
      filterOperation.valueForComparison = this.selectedCategories;
      fullFilter.filters.push(filterOperation);
    }

    if (!_.isNil(this.customFilters)) {
      fullFilter.filters.push(this.customFilters);
    }

    if (!_.isNil(this.filterFromLlm)){
      fullFilter.filters.push(this.filterFromLlm);
    }

    filter.filterOperations = fullFilter;

    filter.filterOperations = fullFilter;

    return filter;
  }

  updateFilterParams() {
    const filter = this.createFilter();

    this.isLoading = true;

    this.currentData$ = this.data(filter).pipe(
      tap((x) => {
        this.length = Math.ceil(x.totalCount / this.item_per_page);
        if (this.length > 0) {
          this.index = Math.min(this.index, this.length - 1);
        } else {
          this.index = 0;
        }
      }),
      map((elements) => _.map(elements.items, this.convertToEkb)),
      tap((elements) => {
        const keys = _.union(..._.map(elements, (x) => _.keys(x.data)));
        this.properties = keys;
        if (_.isEmpty(this.shownProperties)) {
          this.shownProperties = keys;
        }
        this.sortColumns = _.union(this.sortColumns, keys);
        this.isLoading = false;
      }),
      shareReplay(1)
    );
  }

  onPageAmountChanged() {
    this.index = 0;
    this.updateFilterParams();
  }

  goToPage(index: number) {
    this.index = index;
    this.updateFilterParams();
  }
}
