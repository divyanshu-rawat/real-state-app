import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { AppPropertyUsersComponent } from './app-property-users.component';
import { AppRoutingModule } from '../../app-routing.module';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('AppPropertyUsersComponent', () => {
  let component: AppPropertyUsersComponent;
  let fixture: ComponentFixture<AppPropertyUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppPropertyUsersComponent],
      imports: [RouterTestingModule.withRoutes([{ path: 'property/:id', component: AppPropertyUsersComponent }]), HttpClientTestingModule, RouterModule.forRoot([])]
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
