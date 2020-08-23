import { Action } from '@ngrx/store';

export enum UserActionTypes {
  SetUserDetails = '[User] Set User Details',
}

export class SetUserDetails implements Action {
  readonly type = UserActionTypes.SetUserDetails;
  constructor(
    public userName: string,
    public userId: string,
    public isOwner: boolean
  ) {}
}

export type UserActions = SetUserDetails;
