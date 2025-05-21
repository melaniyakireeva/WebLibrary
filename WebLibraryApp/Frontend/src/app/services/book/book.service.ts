import { Injectable } from '@angular/core';
import { HttpCustomService } from '../http/http-service.service';
import { map, Observable } from 'rxjs';
import { Genre } from '../parameters/ekb-parameters.service';
import { Author } from '../author/author-service.service';
import { BaseFilter } from '../filters/filters';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private controller: string = 'Book';
  constructor(private httpService: HttpCustomService) {}

  public getBook(): Observable<any> {
    const method = 'GetAllBooks';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.getRequest(api).pipe(
      map((x) => {
        return (x as any[]).map(
          (val) =>
            <Author>{
              id: val.id,
              name: val.name,
              surname: val.surname,
              patronym: val.patronym,
            }
        );
      })
    );
  }

  public deleteBook(bookId: number) {
    const method = 'DeleteBook';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, {
      bookId: bookId,
    });
  }

  public saveBook(book: BookDto): Observable<any> {
    const method = 'SaveBook';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { book: book });
  }

  public getBooks(filter: BaseFilter): Observable<GetBooksResponse> {
    const method = 'GetBooksByFilter';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { filter }).pipe(
      map((x) => {
        let res = x as GetBooksResponse;
        return {
          totalCount: res.totalCount,
          items: res.items
        };
      })
    );
  }
}

export interface BookDto {
  id: number;
  name: string;
  description: string | null;
  cipher: string;
  isbn: string;
  price: number | null;
  authorValId: number;
  authorVal: Author;
  genreValId: number;
  genreVal: Genre;
  publishYear: number | null;
  receiptDate: string | null;
  fileId: number | null;
}

export interface GetBooksRequest {
  filter: BaseFilter | null;
}

export interface SaveBooksRequest {
  book: BookDto;
}

export interface DeleteBookRequest {
  bookId: number;
}

export interface GetBooksResponse {
  items: BookDto[];
  totalCount: number;
}
