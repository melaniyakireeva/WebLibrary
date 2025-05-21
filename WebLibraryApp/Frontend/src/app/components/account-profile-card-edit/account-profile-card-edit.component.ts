import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiAutoFocus } from '@taiga-ui/cdk';
import {
  TuiButton,
  TuiDataList,
  TuiDialogContext,
  TuiTextfield,
} from '@taiga-ui/core';
import { TuiDataListWrapper, TuiSlider } from '@taiga-ui/kit';
import {
  TuiInputModule,
  TuiMultiSelectModule,
  TuiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { injectContext } from '@taiga-ui/polymorpheus';
import { Observable } from 'rxjs';
import {
  AccountDTO,
  AccountFullInfo,
} from '../../services/messages/room-service.service';
import _ from 'lodash';
import { RegisterAdminDto, RegisterDto } from '../../services/auth/auth-service.service';
import { RoleService } from '../../services/role/role-service.service';

@Component({
  selector: 'app-account-profile-card-edit',
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
    TuiSlider,
    TuiTextfield,
    TuiMultiSelectModule,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './account-profile-card-edit.component.html',
  styleUrl: './account-profile-card-edit.component.scss',
})
export class AccountProfileCardEditComponent {
  protected name: string = '';
  protected surname: string = '';
  protected organization: string = '';
  protected email: string = '';
  protected login: string = '';
  protected password: string = '';
  protected role: number = 0;

  protected roleService: RoleService = inject(RoleService);

  protected readonly roles: number[] = [0, 1, 2];

  public readonly context =
    injectContext<TuiDialogContext<RegisterAdminDto, undefined>>();

  protected submit(): void {
    if (
      !_.isEmpty(this.name) &&
      !_.isEmpty(this.surname) &&
      !_.isEmpty(this.email) &&
      !_.isEmpty(this.login)
    ) {
      const res: RegisterAdminDto = {
        role: this.role,
        password: this.password,
        name: this.name,
        surname: this.surname,
        email: this.email,
        login: this.login,
        organization: this.organization,
      };
      this.context.completeWith(res);
    }
  }
}
