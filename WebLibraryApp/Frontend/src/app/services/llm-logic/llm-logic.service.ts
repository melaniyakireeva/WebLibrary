import { Injectable } from '@angular/core';
import { CONFIG } from '../../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LlmLogicService {
  private baseService: string = CONFIG.llmServer;

  private readonly defaultOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public generateFilter(
    filterText: string
  ): Observable<any> {
    const apiController: string = `${this.baseService}/generateFilter/`;

    return this.httpClient.post(
      apiController,
      {text: filterText},
      this.defaultOptions
    );
  }
}
