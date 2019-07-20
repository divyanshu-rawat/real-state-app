import { Component } from '@angular/core';
import { AuthenticationService } from './Services/AuthenticationService/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthenticationService) { }
  title = 'limehome-frontend';
}
