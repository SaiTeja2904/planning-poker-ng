import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { poll } from '../utils/rx-utils';
import { BASE_URL } from '../registration/registration.service';

@Injectable({
  providedIn: 'root',
})
export class PokerService {
  constructor(public httpClient: HttpClient) {}

  getRoomStatus(roomId) {
    return this.httpClient.get(`${BASE_URL}/rooms/status/${roomId}`);
  }

  getRoomStatusPoll(roomId) {
    return poll(this.getRoomStatus(roomId), 2000, () => false);
  }

  flipCards(roomId) {
    return this.httpClient.put(`${BASE_URL}/rooms/flipCards/${roomId}`, {});
  }

  resetCards(roomId) {
    return this.httpClient.put(`${BASE_URL}/rooms/resetStory/${roomId}`, {});
  }

  castVote(userId, storyPoints, roomId) {
    return this.httpClient.post(`${BASE_URL}/rooms/castVote/`, {
      userId,
      storyPoints,
      roomId,
    });
  }

  updateStoryId(storyId, roomId) {
    return this.httpClient.post(`${BASE_URL}/rooms/setStoryDetails`, {
      storyDetails: { storyId, storyDescription: '' },
      roomId,
    });
  }
}
