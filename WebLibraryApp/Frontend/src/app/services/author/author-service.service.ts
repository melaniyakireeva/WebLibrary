import { Injectable } from '@angular/core';
import { HttpCustomService } from '../http/http-service.service';
import { map, Observable } from 'rxjs';
import { BaseFilter } from '../filters/filters';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private controller: string = 'Author';
  constructor(private httpService: HttpCustomService) {}

  public getAuthor(): Observable<any> {
    const method = 'GetAllAuthors';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.getRequest(api).pipe(
      map((x) => {
        return (x as any[]).map(
          (val) =>
            <Author>{
              id: val.id,
              name: val.name,
              surname: val.surname,
              patronym: val.patronym
            }
        );
      })
    );
  }

  public deleteAuthor(manufacturerId: number){
    const method = 'DeleteAuthor';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, {
      authorId: manufacturerId,
    });
  }

  public saveAuthor(author: Author): Observable<any>{
    const method = 'SaveAuthor';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, {author: author});
  }

  public getAuthors(filter: BaseFilter): Observable<AuthorsData> {
    const method = 'GetAuthorsByFilter';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, {filter}).pipe(
      map((x) => {
        let res = x as GetManufacturersResponse;
        return {
          totalCount: res.totalCount,
          items: res.items.map(x => {
            return <Author>{
              id: x.id,
              name: x.name,
              surname: x.surname,
              patronym: x.patronym
            };
          })
        };
      })
    );
  }
}

export interface Author {
  id: number;
  name: string;
  surname: string;
  patronym: string | null;
}

export interface AuthorDto {
  id: number;
  name: string;
  surname: string;
  patronym: string | null;
}

export interface GetManufacturersResponse {
  items: AuthorDto[];
  totalCount: number;
}

export interface AuthorsData {
  items: Author[];
  totalCount: number;
}