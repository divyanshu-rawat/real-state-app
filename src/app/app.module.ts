import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Module for https requests.
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/app-register/register.component';
import { LoginComponent } from './Components/app-login/login.component';
import { HomeComponent } from './Components/app-home/home.component';
import { AuthenticationService } from './Services/authenticationService/authentication.service';
import { AuthGuardService } from './Services/authGuardService/auth-guard.service';
import { DashboardComponent } from './Components/app-dashboard/dashboard.component';
import { SplitPipe } from './Pipes/split.pipe';
// Module for pagination.
import { NgxPaginationModule } from 'ngx-pagination';
import { PropertyComponent } from './Components/app-dashboard/property/property.component';
import { AppBookingComponent } from './Components/app-booking/app-booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Module for Filtering.
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppPropertyUsersComponent } from './Components/app-property-users/app-property-users.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    SplitPipe,
    PropertyComponent,
    AppBookingComponent,
    AppPropertyUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
