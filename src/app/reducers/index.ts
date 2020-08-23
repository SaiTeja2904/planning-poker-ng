import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UserActions, UserActionTypes } from '../actions/user.actions';
import { RoomActions, RoomActionTypes } from '../actions/room.actions';

export interface State {
  user: UserState;
  room: RoomState;
}

export const reducers: ActionReducerMap<State> = {
  user: UserReducer,
  room: RoomReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export interface UserState {
  userName: string;
  userId: string;
  isOwner: boolean;
}

const initialUserState: UserState = {
  userId: '',
  userName: '',
  isOwner: false,
};

export function UserReducer(
  state: UserState = initialUserState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.SetUserDetails:
      return {
        ...state,
        userId: action.userId,
        userName: action.userName,
        isOwner: action.isOwner,
      };
    default:
      return state;
  }
}

export interface RoomState {
  roomId: number;
  onwer: string;
  story: {
    storyId: string;
    storyDescription: string;
  };
  users: any;
  flipCards: boolean;
}

const initialRoomState: RoomState = {
  roomId: 0,
  onwer: '',
  story: {
    storyId: '',
    storyDescription: '',
  },
  users: [],
  flipCards: false,
};

export function RoomReducer(
  state: RoomState = initialRoomState,
  action: RoomActions
): RoomState {
  switch (action.type) {
    case RoomActionTypes.SetRoomId:
      return {
        ...state,
        roomId: action.roomId,
      };
    default:
      return state;
  }
}
