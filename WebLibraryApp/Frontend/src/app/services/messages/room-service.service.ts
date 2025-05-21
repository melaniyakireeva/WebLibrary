import { Injectable } from '@angular/core';
import { HttpCustomService } from '../http/http-service.service';
import { map, Observable } from 'rxjs';
import { AccountInfo } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private controller: string = 'Room';
  constructor(private httpService: HttpCustomService) {}

  public createRoom(roomDto: RoomDTO): Observable<any> {
    const method = 'CreateRoom';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { createdRoom: roomDto });
  }

  public getMessagesById(roomId: string): Observable<MessageChatDTO[]> {
    const method = 'GetMessagesById';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { roomId });
  }

  public getUserRooms(userId: number): Observable<RoomDTO[]> {
    const method = 'GetUserRooms';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { userId });
  }

  public sendMessage(message: MessageDTO): Observable<boolean> {
    const method = 'SendMessage';
    const api = `api/${this.controller}/${method}`;
    return this.httpService.postRequest(api, { message });
  }
}

export interface BaseModelDTO {
  id?: string;
  createdAt: string;
  isDeleted?: boolean;
}

export interface RoomDTO extends BaseModelDTO {
  userIds: number[] | null;
  name: string | null;
}

export interface AccountDTO {
  id: number;
  name: string;
  surname: string;
  email: string;
  login: string;
  role?: number;
  organization?: string;
  lastVisit?: Date;
  isDisabled?: boolean;
}

export interface AccountFullInfo {
  id: number;
  name: string;
  surname: string;
  email: string;
  login: string;
  profileIconId?: number;
  organization?: string;
}

export interface MessageDTO extends BaseModelDTO {
  text: string;
  isRead: boolean;
  isEdited: boolean;
  userId: number;
  roomId: string;
}

export interface MessageChatDTO extends BaseModelDTO {
  text: string;
  isRead: boolean;
  isEdited: boolean;
  userAvatar?: string;
  user: {
    id: number,
    name: string,
    surname: string
  };
  roomId: string;
}


export interface CreateRoomRequest {
  createdRoom: RoomDTO;
}

export interface GetMessagesByRoomId {
  guid: string;
}

export interface GetUserRoomsRequest {
  userId: number;
}