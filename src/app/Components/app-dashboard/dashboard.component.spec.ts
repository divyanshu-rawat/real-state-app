import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardComponent } from './dashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PropertyComponent } from './property/property.component';
import { SplitPipe } from '../../Pipes/split.pipe';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, PropertyComponent, SplitPipe],
      imports: [NgxPaginationModule, Ng2SearchPipeModule, HttpClientTestingModule, RouterModule.forRoot([])]
    })

      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
