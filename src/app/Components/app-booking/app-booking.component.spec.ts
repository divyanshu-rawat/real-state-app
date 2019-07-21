import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppBookingComponent } from './app-booking.component';
import { PropertyComponent } from '../app-dashboard/property/property.component';
import { SplitPipe } from '../../Pipes/split.pipe';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('AppBookingComponent', () => {
  let component: AppBookingComponent;
  let fixture: ComponentFixture<AppBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppBookingComponent, PropertyComponent, SplitPipe],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBookingComponent);
    component = fixture.componentInstance;
    component.userInformation = {
      _id: '5d349d44f34c6f52ff5675ef',
      email: "divyanshu.r4656@gmail.com",
      name: "divyanshu",
      exp: 80943,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
