import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

export const BASE_URL = 'https://planning-poker-api-teja.herokuapp.com';
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private httpClient: HttpClient) {}

  createRoom(userName, userId) {
    this.httpClient.get(BASE_URL).subscribe(console.log);
    return this.httpClient.post(`${BASE_URL}/rooms/createRoom`, {
      userDetails: {
        userName,
        userId,
      },
    });
  }

  joinRoom(userName, userId, roomId) {
    return this.httpClient
      .post(`${BASE_URL}/rooms/joinRoom`, {
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
