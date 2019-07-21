import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPropertyUsersComponent } from './app-property-users.component';

describe('AppPropertyUsersComponent', () => {
  let component: AppPropertyUsersComponent;
  let fixture: ComponentFixture<AppPropertyUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPropertyUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPropertyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
