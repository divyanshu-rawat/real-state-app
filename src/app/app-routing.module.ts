import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/app-login/login.component';
import { RegisterComponent } from './Components/app-register/register.component';
import { HomeComponent } from './Components/app-home/home.component';
import { DashboardComponent } from './Components/app-dashboard/dashboard.component';
import { AuthGuardService } from './Services/authGuardService/auth-guard.service';
import { AppBookingComponent } from './Components/app-booking/app-booking.component';
import { AppPropertyUsersComponent } from './Components/app-property-users/app-property-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bookings', component: AppBookingComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'property/:id', component: AppPropertyUsersComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
