import { AccountInfo, AuthService } from '../../services/auth/auth-service.service';
import {
  Component,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { TuiPlatform } from '@taiga-ui/cdk';
import {
  TuiAppearance,
  TuiButton,
  TuiLink,
  TuiTitle,
  TuiIcon,
  TuiTextfield,
  tuiDialog,
} from '@taiga-ui/core';
import { TuiAvatar, TuiBadge } from '@taiga-ui/kit';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { AccountFullInfo } from '../../services/messages/room-service.service';
import { NgIf } from '@angular/common';
import _ from 'lodash';
import { UsersService } from '../../services/users/users.service';
import { FormsModule } from '@angular/forms';
import { EditAccountComponent } from '../edit-account/edit-account.component';
import { FilesUploaderService } from '../../services/files/files-uploader.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-account-profile',
  standalone: true,
  imports: [
    TuiAppearance,
    TuiBadge,
    TuiButton,
    TuiCardLarge,
    TuiHeader,
    TuiLink,
    TuiPlatform,
    TuiTitle,
    TuiAvatar,
    NgIf,
    TuiIcon,
    TuiTextfield,
    FormsModule,
  ],
  templateUrl: './account-profile.component.html',
  styleUrl: './account-profile.component.scss',
})
export class AccountProfileComponent implements OnInit {
  accountInfo!: AccountFullInfo;
  fileSrc?: string;

  private readonly dialog = tuiDialog<
    EditAccountComponent,
    'context',
    AccountFullInfo,
    AccountFullInfo
  >(EditAccountComponent, {
    dismissible: true,
    label: 'Редактирование данных о пользователе',
    size: 'l'
  });

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private fileService: FilesUploaderService,
    private cdRef: ChangeDetectorRef
  ) {}

  onEditProfile(){
    this.dialog(_.cloneDeep(this.accountInfo)).subscribe({
      next: (data) => {
        this.userService.updateUserInfo(data).subscribe((x) => {
          if (x) {
            this.accountInfo = data;
            if (_.isNil(data.profileIconId)) {
              this.fileSrc = undefined;
            } else {
              this.fileService
                .getFile(data.profileIconId)
                .pipe(
                  tap((x) => {
                    this.fileSrc = `data:image/png;base64, ${x.fileData}`;
                  })
                )
                .subscribe((x) => {
                  this.cdRef.markForCheck();
                });
            }
            this.cdRef.markForCheck();
          }
        });
      },
    });
  }

  ngOnInit(): void {
    const accountDto: AccountInfo | undefined = this.authService.getUserInfo();
    if (!_.isNil(accountDto?.userId)) {
      const getAccountInfo$ = this.userService.getUser(accountDto.userId).pipe(
        switchMap((accountInfo) => {
          if (!_.isNil(accountInfo?.profileIconId)) {
            return this.fileService.getFile(accountInfo.profileIconId).pipe(
              map((x) => {
                this.fileSrc = `data:image/png;base64, ${x.fileData}`;
                return accountInfo;
              }),
              catchError((x) => of(accountInfo))
            );
          }
          return of(accountInfo);
        })
      );
      getAccountInfo$.subscribe((x) => {
        this.accountInfo = x;
        this.cdRef.markForCheck();
      });
    }
  }
}
