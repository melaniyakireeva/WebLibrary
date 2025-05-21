import { Injectable } from '@angular/core';
import { HttpCustomService } from '../http/http-service.service';
import { map, Observable } from 'rxjs';
import { EkbCategoryDto } from '../ekb-table/ekb-table.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private controller: string = 'Category';
  http: any;
  constructor(private httpService: HttpCustomService) {}

  public getAllCategories(): Observable<EkbCategoryDto[]> {
    const method = 'GetAllCategories';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.getRequest(api);
  }

  public getElementsPerCategory(): Observable<Record<string, number>> {
    const method = 'GetElementsPerCategory';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.getRequest(api);
  }
}
