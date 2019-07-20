import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/AuthenticationService/authentication.service';
import { user } from '../../Models/user';
import { LocationService } from '../../Services/locationService/location.service';

@Component({
  selector: 'app-profile',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  private userInformation: user;
  constructor(private auth: AuthenticationService, private locationService: LocationService) { }

  ngOnInit() {
    this.auth.fetchProfileInformation().subscribe(user => {
      this.userInformation = user.user;
    }, (err) => {
      console.error(err);
    });

    this.locationService.getPosition().then(pos => {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
    });
  }
}