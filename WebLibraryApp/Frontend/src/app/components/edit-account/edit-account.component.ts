import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  TuiIcon,
  TuiTextfield,
  TuiButton,
  TuiDialogContext,
  TuiLink,
} from '@taiga-ui/core';
import { TuiTooltip, TuiPassword, TuiFiles, TuiFileLike, TuiAvatar } from '@taiga-ui/kit';
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
import { catchError, finalize, map, Observable, of, Subject, switchMap, tap, timer } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { injectContext } from '@taiga-ui/polymorpheus';
import { AccountFullInfo } from '../../services/messages/room-service.service';
import { FilesUploaderService } from '../../services/files/files-uploader.service';

@Component({
  selector: 'app-edit-account',
  standalone: true,
  imports: [
    TuiTextfield,
    TuiIcon,
    TuiTooltip,
    TuiPassword,
    TuiButton,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule,
    TuiFiles,
    ReactiveFormsModule,
    TuiAvatar,
    TuiLink,
  ],
  templateUrl: './edit-account.component.html',
  styleUrl: './edit-account.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditAccountComponent {
  error?: string;
  isRegisterProcess: boolean = false;
  email?: string;
  name?: string;
  surname?: string;
  login?: string;
  fileService: FilesUploaderService = inject(FilesUploaderService);
  fileId?: number;

  protected readonly fileControl = new FormControl<TuiFileLike | null>(
    null,
    Validators.required
  );

  public readonly context =
    injectContext<TuiDialogContext<AccountFullInfo, AccountFullInfo>>();

  public get oldAccountInfo(): AccountFullInfo {
    return this.context.data;
  }

  protected submit(): void {
    const newInfo: AccountFullInfo = {
      email: this.email ?? this.oldAccountInfo.email,
      name: this.name ?? this.oldAccountInfo.name,
      surname: this.surname ?? this.oldAccountInfo.surname,
      login: this.login ?? this.oldAccountInfo.login,
      id: this.oldAccountInfo.id,
      organization: this.oldAccountInfo.organization,
      profileIconId: this.fileId ?? this.oldAccountInfo.profileIconId,
    };

    if (!_.isNil(newInfo)) {
      this.context.completeWith(newInfo);
    }
  }

  protected readonly failedFiles$ = new Subject<TuiFileLike | null>();
  protected readonly loadingFiles$ = new Subject<TuiFileLike | null>();
  protected readonly loadedFiles$ = this.fileControl.valueChanges.pipe(
    switchMap((file) => this.processFile(file))
  );

  protected removeFile(): void {
    this.fileControl.setValue(null);
  }

  protected processFile(
    file: TuiFileLike | null
  ): Observable<TuiFileLike | null> {
    this.failedFiles$.next(null);

    if (this.fileControl.invalid || !file) {
      return of(null);
    }

    this.loadingFiles$.next(file);

    const formData = new FormData();
    formData.append('file', <File>file, file.name);

    return this.fileService.uploadFile(formData).pipe(
      map((x) => {
        this.fileId = x;
        return file;
      }),
      catchError((x) => {
        this.failedFiles$.next(file);
        return of(null);
      }),
      finalize(() => this.loadingFiles$.next(null))
    );
  }

  protected onSaveClick() {
    this.submit();
  }
}
