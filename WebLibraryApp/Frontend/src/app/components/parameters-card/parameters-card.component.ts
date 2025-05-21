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
import { Author } from '../../services/author/author-service.service';
import _ from 'lodash';
import { Genre } from '../../services/parameters/ekb-parameters.service';

@Component({
  selector: 'app-parameters-card',
  standalone: true,
  imports: [
    TuiTextfield,
    TuiIcon,
    TuiTooltip,
    TuiButton,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './parameters-card.component.html',
  styleUrl: './parameters-card.component.scss',
})
export class ParametersCardComponent implements OnInit {
  ngOnInit(): void {
    if (!_.isNil(this.context.data.parameterInfo)) {
      this.name = this.context.data.parameterInfo.name ?? '';
      this.id = this.context.data.parameterInfo.id;
    }
  }

  protected id?: number;
  protected name: string = '';

  public readonly context =
    injectContext<
      TuiDialogContext<Genre, { parameterInfo?: Genre }>
    >();

  protected submit(): void {
    if (!_.isEmpty(this.name)) {
      if (_.isNil(this.context.data.parameterInfo)) {
        const res = {
          name: ''
        };
        res.name = this.name;
        this.context.completeWith(res);
      } else {
        this.context.data.parameterInfo.name = this.name;
        this.context.completeWith(this.context.data.parameterInfo);
      }
    }
  }
}
