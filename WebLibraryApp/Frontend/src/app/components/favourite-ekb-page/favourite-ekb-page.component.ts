import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
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
  TuiChip,
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
} from '../../services/ekb-table/ekb-table.service';
import { map, Observable, of, shareReplay, tap } from 'rxjs';
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
import { AuthService } from '../../services/auth/auth-service.service';

@Component({
  selector: 'app-favourite-ekb-page',
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
  templateUrl: './favourite-ekb-page.component.html',
  styleUrl: './favourite-ekb-page.component.scss',
})
export class FavouriteEkbPageComponent implements OnInit {
  private readonly dialogs = inject(TuiDialogService);

  sortColumns: string[] = ['Id'];
  protected properties: string[] = [];
  protected shownProperties: string[] = [];

  protected currentData$: Observable<any[]> = of([]);
  protected isLoading: boolean = false;
  protected index: number = 0;
  protected length: number = 0;
  item_per_page: number = 20;

  columnForSort: string = '';

  readonly ITEMS_PER_PAGE_LIST: number[] = [10, 20, 50];

  filterNameVal: string = '';

  selectedCategories?: number[];

  customFilters: IFilter = new AndFilter();

  converter: any = FilterConverter;

  protected hasFilter: boolean = false;

  constructor(
    private fileService: FilesUploaderService,
    private fileWorker: FileWorkerService,
    private ekbService: EkbTableService,
    private csvGenerator: CsvHelperService,
  ) {}

  protected showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogs.open(content).subscribe();
  }

  onImportCsvEkb() {
    this.currentData$.subscribe((data) => {
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

  onColumnChanged(newColumns: string[]) {
    this.shownProperties = newColumns;
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

  updateFilterParams() {
    this.isLoading = true;

    this.currentData$ = this.ekbService.getFavouriteEkbElements().pipe(
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
}
