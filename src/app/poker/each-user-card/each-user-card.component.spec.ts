import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachUserCardComponent } from './each-user-card.component';

describe('EachUserCardComponent', () => {
  let component: EachUserCardComponent;
  let fixture: ComponentFixture<EachUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
