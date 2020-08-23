import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-each-user-card',
  templateUrl: './each-user-card.component.html',
  styleUrls: ['./each-user-card.component.less'],
})
export class EachUserCardComponent implements OnInit {
  @Input() user;
  constructor() {}

  ngOnInit(): void {}
}
