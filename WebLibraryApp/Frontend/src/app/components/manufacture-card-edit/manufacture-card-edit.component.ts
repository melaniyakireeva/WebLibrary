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

@Component({
  selector: 'app-manufacture-card-edit',
  standalone: true,
  imports: [
    TuiTextfield,
    TuiIcon,
    TuiTooltip,
    TuiButton,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './manufacture-card-edit.component.html',
  styleUrl: './manufacture-card-edit.component.scss',
})
export class ManufactureCardEditComponent implements OnInit {
  ngOnInit(): void {
    if (!_.isNil(this.context.data.authorInfo)) {
      this.id = this.context.data.authorInfo.id;
      this.name = this.context.data.authorInfo.name ?? '';
      this.surname = this.context.data.authorInfo.surname ?? '';
      this.patronym = this.context.data.authorInfo.patronym ?? '';
    }
  }

  protected id?: number;
  protected name: string = '';
  protected surname: string = '';
  protected patronym: string = '';

  public readonly context =
    injectContext<
      TuiDialogContext<Author, { authorInfo?: Author }>
    >();

  protected submit(): void {
    if (!_.isEmpty(this.name)) {
      if (_.isNil(this.context.data.authorInfo)) {
        const res: Author = {
          id: this.id ?? 0,
          name: this.name,
          surname: this.surname,
          patronym: this.patronym
        };
        this.context.completeWith(res);
      } else {
        this.context.data.authorInfo.name = this.name;
        this.context.data.authorInfo.surname = this.surname;
        this.context.data.authorInfo.patronym = this.patronym;
        this.context.completeWith(this.context.data.authorInfo);
      }
    }
  }
}
