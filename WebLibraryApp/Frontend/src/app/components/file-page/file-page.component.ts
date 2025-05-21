import { AsyncPipe, KeyValuePipe, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiReorder, TuiTable } from '@taiga-ui/addon-table';
import { TuiLet, TuiPlatform } from '@taiga-ui/cdk';
import {
  TuiAppearance,
  TuiAutoColorPipe,
  TuiButton,
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
  TuiAvatar,
  TuiBadge,
  TuiCheckbox,
  TuiChevron,
  TuiChip,
  TuiDataListWrapper,
  TuiItemsWithMore,
  TuiPagination,
  TuiProgressBar,
  TuiRadioList,
  TuiStatus,
  TuiTooltip,
} from '@taiga-ui/kit';
import { TuiCardLarge, TuiCell, TuiHeader } from '@taiga-ui/layout';
import { TuiSelectModule } from '@taiga-ui/legacy';
import { map, Observable, tap } from 'rxjs';
import {
  FileModel,
  FilesUploaderService,
} from '../../services/files/files-uploader.service';
import _ from 'lodash';
import { TuiRingChart } from '@taiga-ui/addon-charts';
import byteSize from 'byte-size';
import { FileWorkerService } from '../../services/fileworker/file-worker.service';
import { BaseFilter, Paging } from '../../services/filters/filters';

interface Dictionary<T> {
  [key: string]: T;
}

@Component({
  selector: 'app-file-page',
  standalone: true,
  imports: [
    TuiAppearance,
    TuiAvatar,
    TuiButton,
    TuiCardLarge,
    TuiHeader,
    TuiPlatform,
    TuiTitle,
    FormsModule,
    NgForOf,
    NgIf,
    AsyncPipe,
    TuiAutoColorPipe,
    TuiBadge,
    TuiLoader,
    TuiCell,
    TuiCheckbox,
    TuiChip,
    TuiSelectModule,
    TuiDataListWrapper,
    TuiRoot,
    ReactiveFormsModule,
    TuiScrollbar,
    TuiLet,
    TuiAutoColorPipe,
    KeyValuePipe,
    TuiInitialsPipe,
    TuiTextfield,
    TuiTooltip,
    TuiDropdown,
    TuiReorder,
    TuiChevron,
    TuiIcon,
    TuiItemsWithMore,
    TuiLink,
    TuiProgressBar,
    TuiRadioList,
    TuiStatus,
    TuiTable,
    TuiPagination,
    TuiRingChart,
  ],
  templateUrl: './file-page.component.html',
  styleUrl: './file-page.component.scss',
})
export class FilePageComponent implements OnInit {
  readonly ITEMS_PER_PAGE_LIST: number[] = [5, 10, 20];
  item_per_page: number = 20;
  indexVal: number = 0;
  length: number = 0;

  constructor(
    private fileService: FilesUploaderService,
    private fileWorker: FileWorkerService
  ) {}

  readonly sizeOnServer: number = 10000000;

  fileCategories?: Dictionary<FileModel[]> = undefined;
  filledSpace: number = 0;

  byteSizeConverter: any = byteSize;

  protected value = [0, 1];

  protected index = NaN;

  protected get label(): string {
    const value = Number.isNaN(this.index)
      ? this.sizeOnServer
      : this.value[this.index];
    const obj = byteSize(value);
    const resStr = obj.toString();
    if (this.index === 0) {
      return `Занято ${resStr}`;
    } else if (this.index === 1) {
      return `Не занято ${resStr}`;
    } else {
      return `Всего ${resStr}`;
    }
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

  ngOnInit(): void {
    this.fileService.getAllFiles().pipe(
      tap((files) => {
        this.filledSpace = _.sumBy(files, (x) => x.size);
        this.value = [this.filledSpace, this.sizeOnServer - this.filledSpace];
        this.fileCategories = _.groupBy(files, (x) =>
          this.fileWorker.getFileMimeType(x.fileName)
        );
      })
    ).subscribe(x => {});
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
      pageIndex: this.indexVal,
      itemsPerPage: this.item_per_page,
    };

    this.isLoading = true;

    this.currentData$ = this.fileService.getFilesByFilter(filter).pipe(
      map((x) => {
        this.isLoading = false;
        this.length = Math.ceil(x.totalCount / this.item_per_page);
        if (this.length > 0) {
          this.indexVal = Math.min(this.indexVal, this.length - 1);
        } else {
          this.indexVal = 0;
        }
        return x.items;
      })
    );
  }

  onPageAmountChanged() {
    this.indexVal = 0;
    this.updateFilterParams();
  }

  protected goToPage(index: number): void {
    this.indexVal = index;
    this.updateFilterParams();
  }

  currentData$!: Observable<FileModel[]>;
  isLoading: boolean = false;
}
