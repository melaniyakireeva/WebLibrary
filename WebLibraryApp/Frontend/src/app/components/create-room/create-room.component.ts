import { AsyncPipe, formatDate, NgIf } from '@angular/common';
import type { TemplateRef } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { TuiAutoFocus, tuiPure } from '@taiga-ui/cdk';
import type { TuiDialogContext } from '@taiga-ui/core';
import { TuiButton, TuiDataList, TuiDialogService, TuiRoot, TuiSelect, TuiTextfield } from '@taiga-ui/core';
import { TuiDataListWrapper, TuiSlider } from '@taiga-ui/kit';
import {
  TuiInputModule,
  TuiSelectModule,
  TuiMultiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { injectContext } from '@taiga-ui/polymorpheus';
import { Observable } from 'rxjs';
import { AccountDTO, RoomDTO } from '../../services/messages/room-service.service';
import _ from 'lodash';

export class AccountListItem implements AccountDTO{
  id!: number;
  name!: string;
  surname!: string;
  login!: string;
  email: string;
  constructor(accountDto: AccountDTO){
    this.id = accountDto.id;
    this.name = accountDto.name;
    this.surname = accountDto.surname;
    this.login = accountDto.login;
    this.email = accountDto.email;
  }

  toString(): string{
    return `${this.surname} ${this.surname}`;
  }
}

@Component({
  selector: 'app-create-room',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    TuiAutoFocus,
    TuiButton,
    NgIf,
    TuiDataListWrapper,
    TuiDataList,
    TuiInputModule,
    TuiSelectModule,
    TuiSelect,
    TuiSlider,
    TuiTextfield,
    TuiMultiSelectModule,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './create-room.component.html',
  styleUrl: './create-room.component.scss',
})
export class CreateRoomComponent {
  search: string | null = '';

  selectedAccounts: AccountDTO[] = [];
  
  protected name = '';

  public readonly context =
    injectContext<TuiDialogContext<RoomDTO, Observable<AccountListItem[]>>>();


  protected get accounts$(): Observable<AccountListItem[]> {
    return this.context.data;
  }

  protected submit(): void {
    if (!_.isEmpty(this.selectedAccounts) && !_.isEmpty(this.name)) {
      const resultRoom: RoomDTO = {
        name: this.name,
        userIds: _.map(this.selectedAccounts, x => x.id),
        createdAt: formatDate(new Date(), 'yyyy-MM-ddTHH:mm:ss', 'en-US'),
      };
      this.context.completeWith(resultRoom);
    }
  }
}
