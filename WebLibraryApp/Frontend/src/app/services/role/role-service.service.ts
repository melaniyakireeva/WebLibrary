import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor() { }

  roleToString(role: number | undefined){
    if (_.isNil(role)){
      return 'Неизвестно'; 
    }
    if (role === 0){
      return 'Админ';
    }
    else if (role === 1){
      return 'Эксперт';
    }
    else if (role === 2){
      return 'Пользователь';
    }
    else{
      return 'Неизвестно';
    }
  }
}
