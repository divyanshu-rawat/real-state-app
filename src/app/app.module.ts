import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Module for https requests.
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/app-register/register.component';
import { LoginComponent } from './Components/app-login/login.component';
import { HomeComponent } from './Components/app-home/home.component';
import { AuthenticationService } from './Services/AuthenticationService/authentication.service';
import { AuthGuardService } from './Services/AuthGuardService/auth-guard.service';
import { DashboardComponent } from './Components/app-dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
