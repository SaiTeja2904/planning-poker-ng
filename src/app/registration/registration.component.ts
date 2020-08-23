import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
})
export class RegistrationComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    public fb: FormBuilder,
    public registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      emailId: ['', Validators.required],
      roomId: [''],
    });

    this.formGroup.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  createRoom() {
    const { name, emailId } = this.formGroup.value;
    this.registrationService.createRoom(name, emailId).subscribe((roomId) => {
      console.log(roomId);
    });
  }

  joinRoom() {
    const { name, emailId, roomId } = this.formGroup.value;
    if (roomId) {
      this.registrationService
        .joinRoom(name, emailId, roomId)
        .subscribe((roomId) => {
          console.log(roomId);
        });
    } else {
      alert('Please enter Room ID if you want to join a room');
    }
  }
}
