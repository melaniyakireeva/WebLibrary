import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TuiButton,
  TuiDialogContext,
  TuiIcon,
  TuiTextfield,
} from '@taiga-ui/core';
import { TuiTooltip } from '@taiga-ui/kit';
import { injectContext } from '@taiga-ui/polymorpheus';
import _ from 'lodash';
import { References } from '../../services/reference/reference.service';

@Component({
  selector: 'app-add-reference-modal',
  standalone: true,
  imports: [
    TuiTextfield,
    TuiIcon,
    TuiTooltip,
    TuiButton,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './add-reference-modal.component.html',
  styleUrl: './add-reference-modal.component.scss',
})
export class AddReferenceModalComponent implements OnInit {
  public readonly context =
    injectContext<TuiDialogContext<References, { reference?: References, userId?: number }>>();

  protected id?: number;
  protected name: string = '';
  protected description?: string;

  ngOnInit(): void {
    if (!_.isNil(this.context.data.reference)) {
      this.name = this.context.data.reference.name ?? '';
      this.description = this.context.data.reference.description ?? '';
      this.id = this.context.data.reference.id;
    }
  }

  protected submit(): void {
    if (!_.isEmpty(this.name)) {
      if (_.isNil(this.context.data.reference)) {
        const res: References = {
          id: -1,
          name: this.name,
          userId: this.context.data.userId ?? -1,
          ekbElements: [],
          description: this.description ?? '',
        };
        this.context.completeWith(res);
      } else {
        this.context.data.reference.name = this.name;
        this.context.data.reference.description = this.description ?? '';
        this.context.completeWith(this.context.data.reference);
      }
    }
  }
}
