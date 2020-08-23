import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private httpClient: HttpClient) {}

  baseURL = 'http://localhost:3000';

  createRoom(userName, userId) {
    return this.httpClient.post(`${this.baseURL}/rooms/createRoom`, {
      userDetails: {
        userName,
        userId,
      },
    });
  }

  joinRoom(userName, userId, roomId) {
    return this.httpClient
      .post(`${this.baseURL}/rooms/joinRoom`, {
        userDetails: {
          userName,
          userId,
        },
        roomId,
      })
      .pipe(
        map((data) => data),
        catchError((_) => {
          alert(_.error.error);
          return of([]);
        })
      );
  }
}
