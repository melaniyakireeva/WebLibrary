import { Injectable } from '@angular/core';
import { HttpCustomService } from '../http/http-service.service';
import { Observable } from 'rxjs';
import { BaseFilter } from '../filters/filters';

@Injectable({
  providedIn: 'root',
})
export class AuditService {
  private controller: string = 'Audit';
  http: any;
  constructor(private httpService: HttpCustomService) {}

  public getLogsByFilter(filter: BaseFilter): Observable<LogsData> {
    const method = 'GetLogsByFilter';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { filter: filter });
  }
}

export interface LogEntry {
  id: number;
  callSite: string | null;
  date: string | null;
  exception: string | null;
  level: string | null;
  logger: string | null;
  machineName: string | null;
  message: string | null;
  stackTrace: string | null;
  thread: string | null;
  username: string | null;
}

export interface LogsData {
  items: LogEntry[];
  totalCount: number;
}