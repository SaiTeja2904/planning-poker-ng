import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';

import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { SetUserDetails } from '../actions/user.actions';
import { Router } from '@angular/router';
import { SetRoomId } from '../actions/room.actions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
})
export class RegistrationComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    public fb: FormBuilder,
    public registrationService: RegistrationService,
    public store: Store<State>,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      emailId: ['', Validators.required],
      roomId: [''],
    });
  }

  createRoom() {
    const { name, emailId } = this.formGroup.value;
    this.registrationService
      .createRoom(name, emailId)
      .subscribe((response: any) => {
        const { userDetails, roomId, isOwner } = response;
        const { userName, userId } = userDetails;
        this.store.dispatch(new SetUserDetails(userName, userId, isOwner));
        this.store.dispatch(new SetRoomId(roomId));
        this.router.navigate(['/poker']);
      });
  }

  joinRoom() {
    const { name, emailId, roomId } = this.formGroup.value;
    if (roomId) {
      this.registrationService
        .joinRoom(name, emailId, roomId)
        .subscribe((response: any) => {
          const { userDetails, roomId, isOwner } = response;
          const { userName, userId } = userDetails;
          this.store.dispatch(new SetUserDetails(userName, userId, isOwner));
          this.store.dispatch(new SetRoomId(roomId));
          this.router.navigate(['/poker']);
        });
    } else {
      alert('Please enter Room ID if you want to join a room');
    }
  }
}
