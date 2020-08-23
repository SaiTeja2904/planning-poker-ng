import * as RoomActions from './room.actions';

describe('Room', () => {
  it('should create an instance', () => {
    expect(new RoomActions.LoadRooms()).toBeTruthy();
  });
});
