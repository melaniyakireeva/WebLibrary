import { ChangeDetectorRef, Component, NgModule } from '@angular/core';
import { TuiIcon, TuiTextfield, TuiButton, TuiError } from '@taiga-ui/core';
import { TuiTooltip, TuiPassword } from '@taiga-ui/kit';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AuthService, LoginDto } from '../../services/auth/auth-service.service';
import _ from 'lodash';
import { catchError, of, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-page',
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
    CommonModule
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
})
export class AuthPageComponent {
  error: string | null = null;
  email?: string;
  password?: string;
  isAuthProces: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  onLogin() {
    this.error = null;
    this.isAuthProces = true;
    if (_.isEmpty(this.email)) {
      this.error = 'Почта не должна быть пустым значением';
      this.isAuthProces = false;
      return;
    }
    if (_.isEmpty(this.password)) {
      this.error = 'Пароль не может быть пустым значением';
      this.isAuthProces = false;
      return;
    }

    const loginDto: LoginDto = {
      email: this.email,
      password: this.password,
    };

    const obs$ = this.authService.login(loginDto).pipe(
      tap((isAuthorized) => {
        this.isAuthProces = false;
        if (isAuthorized) {
          this.router.navigate(['']);
        } else {
          this.error = 'В системе нет такого пользователя';
        }
        this.cdRef.markForCheck();
      }),
      catchError((x) => {
        this.isAuthProces = false;
        this.error = x.error.errorText;
        this.cdRef.markForCheck();
        return of(undefined);
      })
    );

    obs$.subscribe(() => {});
  }
}
