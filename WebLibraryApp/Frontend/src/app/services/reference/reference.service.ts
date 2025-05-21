import { Injectable } from '@angular/core';
import { AuthorDto } from '../author/author-service.service';
import { HttpCustomService } from '../http/http-service.service';
import { Observable } from 'rxjs';
import { BaseFilter } from '../filters/filters';
import { EkbElementDto } from '../ekb-table/ekb-table.service';

@Injectable({
  providedIn: 'root',
})
export class ReferenceService {
  private controller: string = 'Reference';

  constructor(private httpService: HttpCustomService) {}

  public getReferenceEkbElements(filter: BaseFilter, referenceId: number) {
    const method = 'GetElementsByFilter';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { filter, referenceId });
  }

  public deleteElementFromReference(
    ekbId: number,
    referencesIds: number[]
  ): Observable<boolean> {
    const method = 'DeleteElementsFromReference';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { ekbId, referencesIds });
  }

  public saveElementToReference(
    ekbId: number,
    referencesIds: number[]
  ): Observable<boolean> {
    const method = 'AddElementsToReference';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { ekbId, referencesIds });
  }

  public getReferencesPerElement(
    userId: number,
    ekbId?: number
  ): Observable<GetReferenceResponse> {
    const method = 'GetElementReferences';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { userId: userId, ekbId: ekbId });
  }

  public getUserReference(userId: number): Observable<GetReferenceResponse> {
    const method = 'GetUserReferences';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { userId });
  }

  public saveUserReference(reference: References): Observable<boolean> {
    const method = 'SaveReference';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { reference });
  }

  public deleteUserReference(referenceId: number): Observable<boolean> {
    const method = 'DeleteReference';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { referenceId });
  }
}

export interface ReferenceInfo {
  id: number;
  name: string;
  description: string;
  elementsCount: number;
}

export interface References {
  id: number;
  name: string;
  description: string;
  userId: number;
  ekbElements: EkbElementDto[];
}


export interface GetReferenceRequest {
  userId: number;
}

export interface SaveReferenceRequest {
  reference: References;
}

export interface DeleteReferenceRequest {
  referenceId: number;
}

export interface GetReferenceResponse {
  items: ReferenceInfo[];
  totalCount: number;
}