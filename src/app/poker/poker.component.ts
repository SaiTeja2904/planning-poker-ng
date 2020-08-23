import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { userDetailsSelector } from '../selectors/users.selector';
import { roomIdSelector } from '../selectors/room.selector';
import { map, skipUntil, filter, distinctUntilChanged } from 'rxjs/operators';
import { PokerService } from './poker.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.less'],
})
export class PokerComponent implements OnInit {
  userName = 'Sai';
  userId;
  isOwner;
  roomId;
  currentRoomUsers;
  availbleVotes = [
    { value: 1, isSelected: false },
    { value: 2, isSelected: false },
    { value: 3, isSelected: false },
    { value: 5, isSelected: false },
    { value: 8, isSelected: false },
    { value: 13, isSelected: false },
    { value: 21, isSelected: false },
  ];
  selectedVote;
  story;

  constructor(public store: Store<State>, public pokerService: PokerService) {
    this.store.select(roomIdSelector).subscribe(({ roomId }) => {
      this.roomId = roomId;
    });
  }

  ngOnInit(): void {
    this.store.select(userDetailsSelector).subscribe((userDetails) => {
      const { userName, userId, isOwner } = userDetails;
      this.userName = userName;
      this.userId = userId;
      this.isOwner = isOwner;
    });

    this.store
      .select(roomIdSelector)
      .pipe(
        filter(({ roomId }) => roomId != 0),
        distinctUntilChanged()
      )
      .subscribe(({ roomId }) => {
        this.pokerService
          .getRoomStatusPoll(roomId)
          .subscribe((roomStatus: any) => {
            this.story = roomStatus.story;
            this.currentRoomUsers = roomStatus.users;
          });
      });
  }

  flipCards() {
    this.pokerService.flipCards(this.roomId).subscribe(() => {});
  }

  resetCards() {
    this.resetAllSelectedCards();
    this.pokerService.resetCards(this.roomId).subscribe(() => {});
  }

  onVoteSelected(value) {
    this.availbleVotes = this.availbleVotes.map((aa) => {
      return {
        value: aa.value,
        isSelected: aa.value === value,
      };
    });
    this.pokerService
      .castVote(this.userId, value, this.roomId)
      .subscribe(() => {});
  }

  onStoryIdEdit() {
    var newStoryId = window.prompt('Plese enter new Stroy ID', 'WA-');

    if (newStoryId !== null && newStoryId !== '') {
      this.pokerService
        .updateStoryId(newStoryId, this.roomId)
        .subscribe(() => {});
    }
  }

  resetAllSelectedCards() {
    this.availbleVotes = this.availbleVotes.map((aa) => {
      return {
        value: aa.value,
        isSelected: false,
      };
    });
  }
}
