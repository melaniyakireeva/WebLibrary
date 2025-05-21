import { Component, OnInit } from '@angular/core';
import { ManufacturerTableComponent } from '../manufacturer-table/manufacturer-table.component';
import { Author, AuthorsData, AuthorService } from '../../services/author/author-service.service';
import { map, Observable, tap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { BaseFilter } from '../../services/filters/filters';

@Component({
  selector: 'app-manufacturer-page',
  standalone: true,
  imports: [ManufacturerTableComponent, AsyncPipe, NgIf],
  templateUrl: './manufacturer-page.component.html',
  styleUrl: './manufacturer-page.component.scss',
})
export class ManufacturerPageComponent implements OnInit {
  public manufacturers!: (filter: BaseFilter) => Observable<AuthorsData>;
  constructor(private manufactureService: AuthorService) {}
  ngOnInit(): void {
    this.manufacturers = (filter: BaseFilter) =>
      this.manufactureService.getAuthors(filter);
  }
}
