import { Injectable } from '@angular/core';
import { HttpCustomService } from '../http/http-service.service';
import { catchError, map, Observable, of } from 'rxjs';
import { AccountDTO, AccountFullInfo } from '../messages/room-service.service';
import { BaseFilter } from '../filters/filters';
import { RegisterAdminDto } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private controller: string = 'User';
  http: any;
  constructor(private httpService: HttpCustomService) {}

  public getAllUsers(): Observable<AccountDTO[]> {
    const method = 'GetAllUsers';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.getRequest(api).pipe(
      map((x) => {
        return (x as any[]).map(
          (val) =>
            <AccountDTO>{
              id: val.id,
              name: val.name,
              surname: val.surname,
              login: val.login,
              role: val.role,
              organization: val.organization,
              lastVisit: val.lastVisitDate,
              isDisabled: val.isDisabled,
              email: val.email,
            }
        );
      })
    );
  }

  public getUsersByFilter(filter: BaseFilter): Observable<AccountDTO[]> {
    const method = 'GetUsersByFilter';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { filter }).pipe(
      map((x) => {
        let res = x as GetUsersResponse;
        return (res.accounts as any[]).map(
          (val) =>
            <AccountDTO>{
              id: val.id,
              name: val.name,
              surname: val.surname,
              login: val.login,
              role: val.role,
              organization: val.organization,
              lastVisit: val.lastVisitDate,
              isDisabled: val.isDisabled,
              email: val.email,
            }
        );
      })
    );
  }

  public saveUser(registerDto: RegisterAdminDto): Observable<boolean> {
    let method: string = 'SaveUser';
    return this.httpService
      .postRequest(`api/${this.controller}/${method}`, registerDto)
      .pipe(
        map((x) => {
          return true;
        }),
        catchError((x) => {
          return of(false);
        })
      );
  }

  public deleteUser(id: number): Observable<boolean> {
    let method: string = 'DeleteUser';
    return this.httpService
      .postRequest(`api/${this.controller}/${method}`, {userId: id})
      .pipe(
        map((x) => {
          return x;
        }),
        catchError((x) => {
          return of(false);
        })
      );
  }

  public updateUserInfo(accountInfo: AccountDTO): Observable<boolean> {
    const method = 'UpdateUser';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { account: accountInfo });
  }

  public getUser(id: number): Observable<AccountFullInfo> {
    const method = 'GetUser';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { userId: id }).pipe(
      map((val) => {
        return <AccountFullInfo>{
          id: val.id,
          name: val.name,
          surname: val.surname,
          email: val.email,
          login: val.login,
          organization: val.organization,
          profileIconId: val.profileIconId,
        };
      })
    );
  }
}

export interface GetUsersResponse {
  accounts: AccountDTO[];
}
