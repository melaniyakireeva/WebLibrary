import { Component, inject } from '@angular/core';
import { ElectronicTableComponent } from '../electronic-table/electronic-table.component';
import { injectContext } from '@taiga-ui/polymorpheus';
import { TuiDialogContext } from '@taiga-ui/core';
import _ from 'lodash';
import { BaseFilter } from '../../services/filters/filters';
import { Observable } from 'rxjs';
import { GetEkbElementsResponse } from '../../services/ekb-table/ekb-table.service';
import { ReferenceService } from '../../services/reference/reference.service';

@Component({
  selector: 'app-reference-ekb-element',
  standalone: true,
  imports: [ElectronicTableComponent],
  templateUrl: './reference-ekb-element.component.html',
  styleUrl: './reference-ekb-element.component.scss',
})
export class ReferenceEkbElementComponent {
  protected ekbData!: (filter: BaseFilter) => Observable<GetEkbElementsResponse>;

  private referenceService: ReferenceService = inject(ReferenceService);

  public readonly context =
    injectContext<TuiDialogContext<number, { referenceId?: number }>>();

  ngOnInit(): void {
    this.ekbData = (filter: BaseFilter) => {
      return this.referenceService.getReferenceEkbElements(filter, this.context.data.referenceId ?? -2);
    };
  }
}
