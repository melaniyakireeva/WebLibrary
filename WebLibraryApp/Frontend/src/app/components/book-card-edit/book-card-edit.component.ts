import { Component, inject, OnInit, signal } from '@angular/core';
import {
  TuiButton,
  TuiDataList,
  TuiDialogContext,
  TuiIcon,
  TuiSelect,
  TuiTextfield,
} from '@taiga-ui/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { TuiAvatar, TuiDataListWrapper, TuiFileLike, TuiFiles, tuiItemsHandlersProvider, TuiTooltip } from '@taiga-ui/kit';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookDto } from '../../services/book/book.service';
import { Genre, GenreService } from '../../services/parameters/ekb-parameters.service';
import { Author, AuthorService } from '../../services/author/author-service.service';
import _ from 'lodash';
import { AndFilter } from '../../services/filters/filterOperations';
import { catchError, combineLatest, finalize, map, Observable, of, Subject, switchMap } from 'rxjs';
import { TuiInputDateModule, TuiInputNumberModule, TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { TuiDay } from '@taiga-ui/cdk';
import { FilesUploaderService } from '../../services/files/files-uploader.service';

@Component({
  selector: 'app-book-card-edit',
  standalone: true,
  imports: [
    TuiTextfield,
    TuiIcon,
    TuiTooltip,
    TuiButton,
    TuiSelect,
    TuiFiles,
    FormsModule,
    ReactiveFormsModule,
    TuiAvatar,
    TuiDataList,
    TuiSelectModule,
    TuiInputDateModule,
    TuiInputNumberModule,
    TuiTextfieldControllerModule,
    TuiDataListWrapper,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './book-card-edit.component.html',
  styleUrl: './book-card-edit.component.scss',
})
export class BookCardEditComponent {
  private genreService: GenreService = inject(GenreService);
  private authorService: AuthorService = inject(AuthorService);

  fileService: FilesUploaderService = inject(FilesUploaderService);
  fileId: number | null = null;

  ngOnInit(): void {
    const genreObs$ = this.genreService
      .getParameters({
        paging: null,
        scopeParams: null,
        filterOperations: new AndFilter(),
        sortInfo: null,
      })
      .pipe(map((x) => x.items));
    const authorObs$ = this.authorService
      .getAuthors({
        paging: null,
        scopeParams: null,
        filterOperations: new AndFilter(),
        sortInfo: null,
      })
      .pipe(map((x) => x.items));
    const elements$ = combineLatest([genreObs$, authorObs$]);
    elements$.subscribe(([genres, authors]) => {
      this.genres = genres;
      this.authors = authors;
      if (!_.isNil(this.context.data.bookInfo)) {
        this.id = this.context.data.bookInfo.id;
        this.name = this.context.data.bookInfo.name ?? '';
        this.description = this.context.data.bookInfo.description ?? '';
        this.cipher = this.context.data.bookInfo.cipher ?? '';
        this.isbn = this.context.data.bookInfo.isbn ?? '';
        this.price = this.context.data.bookInfo.price;
        this.fileId = this.context.data.bookInfo.fileId;
        this.genre =
          _.find(
            this.genres,
            (x) => this.context.data.bookInfo?.genreVal.id === x.id
          ) ?? this.context.data.bookInfo.genreVal;
        this.author =
          _.find(
            this.authors,
            (x) => this.context.data.bookInfo?.authorVal.id === x.id
          ) ?? this.context.data.bookInfo.authorVal;
        this.publishYear = this.context.data.bookInfo.publishYear;
        this.receiptDate = this.context.data.bookInfo.receiptDate
          ? TuiDay.normalizeParse(this.context.data.bookInfo.receiptDate, 'YMD')
          : TuiDay.currentUtc();
      }
    });
  }

  public readonly context =
    injectContext<TuiDialogContext<BookDto, { bookInfo?: BookDto }>>();

  protected genres: Genre[] = [];
  protected authors: Author[] = [];

  protected id?: number;
  protected name: string = '';
  protected description: string | null = '';
  protected cipher: string = '';
  protected isbn: string = '';
  protected price: number | null = 0;
  protected genre!: Genre;
  protected author!: Author;
  protected publishYear: number | null = 0;
  protected receiptDate: TuiDay | null = null;

  protected readonly fileControl = new FormControl<TuiFileLike | null>(
    null,
    Validators.required
  );

  protected readonly failedFiles$ = new Subject<TuiFileLike | null>();
  protected readonly loadingFiles$ = new Subject<TuiFileLike | null>();
  protected readonly loadedFiles$ = this.fileControl.valueChanges.pipe(
    switchMap((file) => this.processFile(file))
  );

  protected removeFile(): void {
    this.fileControl.setValue(null);
  }

  protected processFile(
    file: TuiFileLike | null
  ): Observable<TuiFileLike | null> {
    this.failedFiles$.next(null);

    if (this.fileControl.invalid || !file) {
      return of(null);
    }

    this.loadingFiles$.next(file);

    const formData = new FormData();
    formData.append('file', <File>file, file.name);

    return this.fileService.uploadFile(formData).pipe(
      map((x) => {
        this.fileId = x;
        return file;
      }),
      catchError((x) => {
        this.failedFiles$.next(file);
        return of(null);
      }),
      finalize(() => this.loadingFiles$.next(null))
    );
  }

  protected submit(): void {
    const isValid =
      !_.isEmpty(this.name) && !_.isEmpty(this.cipher) && !_.isEmpty(this.isbn);

    if (isValid) {
      if (_.isNil(this.context.data.bookInfo)) {
        const res: BookDto = {
          id: this.id ?? 0,
          name: this.name,
          description: this.description,
          cipher: this.cipher,
          isbn: this.isbn,
          price: this.price,
          genreVal: this.genre,
          authorVal: this.author,
          publishYear: this.publishYear,
          receiptDate: this.receiptDate?.toString('YMD', '-') ?? null,
          fileId: this.fileId,
          genreValId: this.genre.id ?? 1,
          authorValId: this.author.id ?? 1,
        };
        this.context.completeWith(res);
      } else {
        this.context.data.bookInfo.name = this.name;
        this.context.data.bookInfo.description = this.description;
        this.context.data.bookInfo.cipher = this.cipher;
        this.context.data.bookInfo.isbn = this.isbn;
        this.context.data.bookInfo.price = this.price;
        this.context.data.bookInfo.genreVal = this.genre;
        this.context.data.bookInfo.authorVal = this.author;
        this.context.data.bookInfo.publishYear = this.publishYear;
        this.context.data.bookInfo.fileId = this.fileId;
        this.context.data.bookInfo.receiptDate =
          this.receiptDate?.toString('YMD', '-') ?? null;
        this.context.data.bookInfo.authorValId = this.author.id;
        this.context.data.bookInfo.genreValId = this.genre.id ?? 1;
        this.context.completeWith(this.context.data.bookInfo);
      }
    }
  }
}
