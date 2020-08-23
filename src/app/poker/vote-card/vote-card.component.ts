import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-card',
  templateUrl: './vote-card.component.html',
  styleUrls: ['./vote-card.component.less'],
})
export class VoteCardComponent implements OnInit {
  @Input() vote;
  @Output() selectedVote = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selected() {
    this.selectedVote.emit(this.vote.value);
  }
}
