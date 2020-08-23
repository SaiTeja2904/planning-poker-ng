import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers';

const userSelector = createFeatureSelector<UserState>('user');

export const userDetailsSelector = createSelector(
  userSelector,
  (state: UserState) => ({
    userName: state.userName,
    userId: state.userId,
    isOwner: state.isOwner,
  })
);
