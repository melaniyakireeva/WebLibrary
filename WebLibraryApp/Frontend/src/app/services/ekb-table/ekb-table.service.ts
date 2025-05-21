import { Injectable } from '@angular/core';
import { AuthorDto } from '../author/author-service.service';
import { HttpCustomService } from '../http/http-service.service';
import { Observable } from 'rxjs';
import { BaseFilter } from '../filters/filters';

@Injectable({
  providedIn: 'root',
})
export class EkbTableService {
  private controller: string = 'Ekb';

  constructor(private httpService: HttpCustomService) {}

  public markElementAsFavourite(
    ekbId: number,
    userId: number,
    isMarked: boolean
  ): Observable<boolean> {
    const method = 'MarkFavourite';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { ekbId, userId, isMarked });
  }

  public getFavouriteEkbElements(): Observable<GetEkbElementsResponse> {
    const method = 'GetFavouriteEkbElements';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.getRequest(api);
  }

  public getEkbElements(
    filter: BaseFilter
  ): Observable<GetEkbElementsResponse> {
    const method = 'GetEkbElements';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { filter: filter });
  }
}

export interface GetEkbElementsResponse {
  items: EkbElementDto[];
  totalCount: number;
}

export interface EkbCategoryDto {
  id: number;
  name: string;
  parentId: number | null;
}

export interface EkbElementProperty {
  id: number;
  propertyName: string;
  value: string;
}

export interface EkbElementDto {
  id: number;
  fileModelId: number | null;
  isFavourite: boolean;
  ekbCategory: EkbCategoryDto | null;
  manufacturer: AuthorDto | null;
  traceHolder: AuthorDto | null;
  properties: EkbElementProperty[];
}