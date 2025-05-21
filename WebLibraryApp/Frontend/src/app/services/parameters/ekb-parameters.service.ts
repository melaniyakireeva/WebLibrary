import { Injectable } from '@angular/core';
import { HttpCustomService } from '../http/http-service.service';
import { BaseFilter } from '../filters/filters';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private controller: string = 'Genre';
  constructor(private httpService: HttpCustomService) {}

  public getParameters(filter: BaseFilter): Observable<ParametersData> {
    const method = 'GetGenresByFilter';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { filter }).pipe(
      map((x) => {
        let res = x as ParametersData;
        return {
          totalCount: res.totalCount,
          items: res.items.map((x) => {
            return <Genre>{
              id: x.id,
              name: x.name,
            };
          }),
        };
      })
    );
  }

  public saveParameter(parameter: Genre): Observable<any> {
    const method = 'SaveGenre';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { genre: parameter });
  }
}

export interface ParametersData {
  items: Genre[];
  totalCount: number;
}

export interface Genre {
  id?: number;
  name: string;
}
