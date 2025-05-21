import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CsvHelperService {

  constructor() { }

  generateCsv(data: any[]){
    if (_.isEmpty(data)){
      return '';
    }
    
    const keys = [...Object.keys(data[0])];
    const headersStr = keys.join(',');
    const rows = data.map((item) => keys.map(key => item[key]).join(',')).join('\r\n');
    return `${headersStr}\r\n${rows}`;
  }
}
