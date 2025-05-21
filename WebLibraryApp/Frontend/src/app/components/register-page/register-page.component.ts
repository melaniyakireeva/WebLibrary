import { ChangeDetectorRef, Component } from '@angular/core';
import { TuiIcon, TuiTextfield, TuiButton, TuiError } from '@taiga-ui/core';
import { TuiTooltip, TuiPassword } from '@taiga-ui/kit';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import _ from 'lodash';
import {
  AuthService,
  RegisterDto,
} from '../../services/auth/auth-service.service';
import { catchError, of, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-page',
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
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  error: string | null = null;
  isRegisterProcess: boolean = false;
  email?: string;
  password?: string;
  repeatPassword?: string;
  name?: string;
  surname?: string;
  login?: string;
  organization?: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  onRegisterClick() {
    this.error = null;
    this.isRegisterProcess = true;
    if (_.isEmpty(this.email)) {
      this.error = 'Почта не должна быть пустым значением';
      this.isRegisterProcess = false;
      return;
    }
    if (_.isEmpty(this.name)) {
      this.error = 'Имя не должна быть пустым значением';
      this.isRegisterProcess = false;
      return;
    }
    if (_.isEmpty(this.surname)) {
      this.error = 'Фамилия не должна быть пустым значением';
      this.isRegisterProcess = false;
      return;
    }
    if (_.isEmpty(this.password)) {
      this.error = 'Пароль не может быть пустым значением';
      this.isRegisterProcess = false;
      return;
    }
    if (this.password !== this.repeatPassword) {
      this.error = 'Повторенный пароль не совпадает с исходным';
      this.isRegisterProcess = false;
      return;
    }

    const registerDto: RegisterDto = {
      email: this.email ?? '',
      password: this.password ?? '',
      name: this.name ?? '',
      organization: this.organization,
      surname: this.surname ?? '',
      login: this.login ?? ''
    };

    const obs$ = this.authService.register(registerDto).pipe(
      tap((isAuthorized) => {
        this.isRegisterProcess = false;
        this.router.navigate(['']);
        this.cdRef.markForCheck();
      }),
      catchError((x) => {
        this.isRegisterProcess = false;
        this.error = x;
        this.cdRef.markForCheck();
        return of(undefined);
      })
    );

    obs$.subscribe(() => {});
  }
}
