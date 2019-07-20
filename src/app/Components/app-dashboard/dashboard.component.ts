import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/AuthenticationService/authentication.service';
import { user } from '../../Models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  private userInformation: user;
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.fetchProfileInformation().subscribe(user => {
      this.userInformation = user.user;
    }, (err) => {
      console.error(err);
    });
  }
}