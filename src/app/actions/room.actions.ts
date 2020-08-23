import { Action } from '@ngrx/store';

export enum RoomActionTypes {
  LoadRooms = '[Room] Load Rooms',
  SetRoomId = '[Room] Set Room Id',
}

export class LoadRooms implements Action {
  readonly type = RoomActionTypes.LoadRooms;
}

export class SetRoomId implements Action {
  readonly type = RoomActionTypes.SetRoomId;
  constructor(public roomId: number) {}
}

export type RoomActions = LoadRooms | SetRoomId;
