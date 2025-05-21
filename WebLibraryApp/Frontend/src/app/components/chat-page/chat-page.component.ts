import { ChangeDetectorRef, Component } from '@angular/core';
import { TuiPlatform } from '@taiga-ui/cdk';
import {
  TuiAppearance,
  TuiButton,
  tuiDialog,
  TuiDialogSize,
  TuiIcon,
  TuiLink,
  TuiRoot,
  TuiScrollbar,
  TuiTextfield,
  TuiTitle,
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiBadgeNotification,
} from '@taiga-ui/kit';
import { TuiCardLarge, TuiCell, TuiHeader } from '@taiga-ui/layout';
import { filter, map, Observable, of, switchMap } from 'rxjs';
import { AccountInfo, AuthService } from '../../services/auth/auth-service.service';
import { MessageChatDTO, MessageDTO, RoomDTO, RoomService } from '../../services/messages/room-service.service';
import _ from 'lodash';
import { AsyncPipe, formatDate, NgClass, NgFor, NgIf, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountListItem, CreateRoomComponent } from '../create-room/create-room.component';
import { UsersService } from '../../services/users/users.service';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';

interface MessageChatUI extends MessageChatDTO{
  isOwnMessage: boolean;
}

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [
    TuiTextfield,
    TuiAppearance,
    TuiBadge,
    TuiButton,
    TuiCardLarge,
    TuiHeader,
    TuiLink,
    TuiRoot,
    TuiPlatform,
    TuiTitle,
    TuiButton,
    TuiScrollbar,
    NgFor,
    NgIf,
    AsyncPipe,
    TuiInputModule,
    TuiTextfield,
    TuiTextfieldControllerModule,
    TuiIcon,
    TuiBadgeNotification,
    SlicePipe,
    FormsModule,
    TuiAvatar,
    TuiCell,
    NgClass,
  ],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss',
})
export class ChatPageComponent {
  loggedUser: AccountInfo | undefined;
  fiterRoomText?: string;
  selectedRoom?: RoomDTO;
  public userRooms$: Observable<RoomDTO[]> = of([]);
  public roomMessages$: Observable<MessageChatUI[]> = of([]);
  public message: string = '';
  private readonly dialog = tuiDialog(CreateRoomComponent, {
    dismissible: true,
    label: 'Создание комнаты',
  });

  constructor(
    private accountService: AuthService,
    private messageService: RoomService,
    private userService: UsersService,
    private cdRef: ChangeDetectorRef
  ) {}

  protected showDialog(): void {
    const obs$ = this.userService
      .getAllUsers()
      .pipe(map((accounts) => _.map(accounts, (x) => new AccountListItem(x))));
    this.dialog(obs$).subscribe({
      next: (data) => {
        this.messageService.createRoom(data).subscribe((x) => {
          this.refresh();
          this.cdRef.markForCheck();
        });
      },
    });
  }

  refresh() {
    this.loggedUser = this.accountService.getUserInfo();
    if (!_.isNil(this.loggedUser?.userId)) {
      this.userRooms$ = this.messageService.getUserRooms(
        this.loggedUser.userId
      ).pipe(
        map((x) => {
            if (_.isNil(this.fiterRoomText) || _.isEmpty(this.fiterRoomText)) {
              return x;
            } else {
              return x.filter((y) => y.name?.includes(this.fiterRoomText ?? ''));
            }
          }),
      );
    }

    this.refreshMessages();
  }

  onFilterTextUpdate(){
    this.refresh();
  }

  refreshMessages() {
    if (!_.isNil(this.selectedRoom?.id)) {
      const userId = this.accountService.getUserInfo()?.userId;
      this.roomMessages$ = this.messageService
        .getMessagesById(this.selectedRoom.id)
        .pipe(
          map((x) => {
            return x.map((y) => {
              return {
                ...y,
                isOwnMessage: y.user.id === userId,
              };
            });
          })
        );
    }
  }

  ngOnInit(): void {
    this.refresh();
  }

  updateRoom(room: RoomDTO) {
    this.selectedRoom = room;
    this.refreshMessages();
  }

  sendMessage() {
    if (!_.isNil(this.selectedRoom?.id) && !_.isEmpty(this.message)) {
      const loggedUser = this.accountService.getUserInfo();
      if (!_.isNil(loggedUser?.userId)) {
        const messageDto: MessageDTO = {
          createdAt: formatDate(new Date(), 'yyyy-MM-ddTHH:mm:ss', 'en-US'),
          text: this.message,
          isRead: true,
          isEdited: false,
          userId: loggedUser.userId,
          roomId: this.selectedRoom.id,
        };
        const messageSend$ = this.messageService.sendMessage(messageDto);
        messageSend$.subscribe((x) => {
          this.message = '';
          this.refreshMessages();
          this.cdRef.markForCheck();
        });
      }
    }
  }

  onAddRoom() {
    this.showDialog();
  }
}
