import { Injectable } from '@angular/core';
import { HttpCustomService } from '../http/http-service.service';
import { map, Observable } from 'rxjs';
import { BaseFilter } from '../filters/filters';

@Injectable({
  providedIn: 'root',
})
export class FilesUploaderService {
  private controller: string = 'File';

  constructor(private httpService: HttpCustomService) {}

  public uploadFile(file: any): Observable<number> {
    const method = 'UploadFile';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, file, false, {});
  }

  public getFile(id: number): Observable<FileModel> {
    const method = 'GetFile';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { fileId: id });
  }

  public getAllFiles(): Observable<FileModel[]> {
    const method = 'GetAllFiles';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.getRequest(api);
  }

  public getFilesByFilter(
    filter: BaseFilter
  ): Observable<GetFilesByFilterResponse> {
    const method = 'GetFilesByFilter';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { filter }).pipe(
      map((x) => {
        let res = x as GetFilesByFilterResponse;
        return {
          totalCount: res.totalCount,
          items: res.items,
        };
      })
    );
  }
}

export interface GetFilesByFilterResponse {
  items: FileModel[];
  totalCount: number;
}

export interface FileModel {
  id: number;
  size: number;
  fileName: string;
  fileData: string;
}