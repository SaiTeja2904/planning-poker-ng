import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { poll } from '../utils/rx-utils';

@Injectable({
  providedIn: 'root',
})
export class PokerService {
  baseURL = 'http://localhost:3000';

  constructor(public httpClient: HttpClient) {}

  getRoomStatus(roomId) {
    return this.httpClient.get(`${this.baseURL}/rooms/status/${roomId}`);
  }

  getRoomStatusPoll(roomId) {
    return poll(this.getRoomStatus(roomId), 2000, () => false);
  }

  flipCards(roomId) {
    return this.httpClient.put(`${this.baseURL}/rooms/flipCards/${roomId}`, {});
  }

  resetCards(roomId) {
    return this.httpClient.put(
      `${this.baseURL}/rooms/resetStory/${roomId}`,
      {}
    );
  }

  castVote(userId, storyPoints, roomId) {
    return this.httpClient.post(`${this.baseURL}/rooms/castVote/`, {
      userId,
      storyPoints,
      roomId,
    });
  }

  updateStoryId(storyId, roomId) {
    return this.httpClient.post(`${this.baseURL}/rooms/setStoryDetails`, {
      storyDetails: { storyId, storyDescription: '' },
      roomId,
    });
  }
}
