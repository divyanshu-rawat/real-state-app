import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/AuthenticationService/authentication.service';
import { user } from '../../Models/user';
import { PropertyService } from '../../Services/propertyService/property.service';
import { location } from '../../Models/location';
import data from '../../Shared/fake-data.json';
@Component({
  selector: 'app-profile',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private userInformation: user;
  private p: number = 1;
  private properties: any[];
  private userLocation: location;
  constructor(private auth: AuthenticationService, private propertyService: PropertyService) { }

  ngOnInit() {
    this.userLocation = data.search.context.location;
    this.properties = data.results.items;
    this.auth.fetchProfileInformation().subscribe(user => {
      this.userInformation = user.user;
      /* Commented out to save api calls!.
        this.propertyService.getProperties().subscribe(properties => {
          console.log("properties", properties);
          this.properties = properties;
        });
      */
    }, (err) => {
      console.error(err);
    });
  }
}