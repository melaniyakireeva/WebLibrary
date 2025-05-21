import { ChangeDetectorRef, Component, inject, NgModule } from '@angular/core';
import { TuiIcon, TuiTextfield, TuiButton, TuiError, TuiDialogService, TUI_ALERTS } from '@taiga-ui/core';
import { TuiTooltip, TuiPassword, TuiConfirmData, TUI_CONFIRM } from '@taiga-ui/kit';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import {
  AuthService,
  ChangePasswordDto,
  LoginDto,
} from '../../services/auth/auth-service.service';
import _ from 'lodash';
import { catchError, of, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-change-password-page',
  standalone: true,
  imports: [
    TuiTextfield,
    TuiIcon,
    TuiTooltip,
    TuiPassword,
    TuiButton,
    TuiError,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './change-password-page.component.html',
  styleUrl: './change-password-page.component.scss',
})
export class ChangePasswordPageComponent {
  private readonly dialogs = inject(TuiDialogService);
  
  error: string | null = null;
  email?: string;
  oldPassword?: string;
  newPassword?: string;
  isChangePasswordProcess: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  onChangePassword() {
    this.error = null;
    this.isChangePasswordProcess = true;

    if (_.isEmpty(this.email)) {
      this.error = 'Почта не должна быть пустым значением';
      this.isChangePasswordProcess = false;
      return;
    }

    if (_.isEmpty(this.oldPassword) || _.isEmpty(this.newPassword)) {
      this.error = 'Пароль не может быть пустым значением';
      this.isChangePasswordProcess = false;
      return;
    }

    const changePasswordDto: ChangePasswordDto = {
      email: this.email,
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
    };

    const obs$ = this.authService.changePassword(changePasswordDto).pipe(
      tap((isChanged) => {
        this.isChangePasswordProcess = false;
        if (isChanged) {
          this.dialogs
            .open('', {
              label: 'Смена пароля успешна',
              size: 's',
            })
            .subscribe();
        } else {
          this.error = 'Серверная ошибка';
        }
        this.cdRef.markForCheck();
      }),
      catchError((x) => {
        this.isChangePasswordProcess = false;
        this.error = x.error.errorText;
        this.cdRef.markForCheck();
        return of(undefined);
      })
    );

    obs$.subscribe(() => {});
  }
}
