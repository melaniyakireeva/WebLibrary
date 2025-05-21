import { Component } from '@angular/core';
import { EkbTableService, GetEkbElementsResponse } from '../../services/ekb-table/ekb-table.service';
import { BaseFilter } from '../../services/filters/filters';
import { Observable } from 'rxjs';
import { ElectronicTableComponent } from '../electronic-table/electronic-table.component';

@Component({
  selector: 'app-electronics-page',
  standalone: true,
  imports: [ElectronicTableComponent],
  templateUrl: './electronics-page.component.html',
  styleUrl: './electronics-page.component.scss',
})
export class ElectronicsPageComponent {
  ekbElements!: (filter: BaseFilter) => Observable<GetEkbElementsResponse>;
  constructor(private ekbService: EkbTableService) {
    this.ekbElements = (filter: BaseFilter) => {
      return this.ekbService.getEkbElements(filter);
    };
  }
}
