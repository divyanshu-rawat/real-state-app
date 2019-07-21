import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBookingComponent } from './app-booking.component';

describe('AppBookingComponent', () => {
  let component: AppBookingComponent;
  let fixture: ComponentFixture<AppBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
