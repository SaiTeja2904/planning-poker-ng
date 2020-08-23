import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RoomState } from '../reducers';

const roomSelector = createFeatureSelector<RoomState>('room');

export const roomIdSelector = createSelector(
  roomSelector,
  (state: RoomState) => ({
    roomId: state.roomId,
  })
);
