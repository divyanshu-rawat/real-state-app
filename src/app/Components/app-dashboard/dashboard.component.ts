import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/AuthenticationService/authentication.service';
import { user } from '../../Models/user';
import { PropertyService } from '../../Services/propertyService/property.service';
import { location } from '../../Models/location';
import data from '../../Shared/fake-data.json';
import { property } from '../../Models/property';
import { BookingService } from '../../Services/bookingService/booking.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate(800)
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  private userInformation: user;
  private p: number = 1;
  private properties: any[];
  private userLocation: location;
  private toogle = false;
  constructor(
    private auth: AuthenticationService,
    private propertyService: PropertyService,
    private bookingService: BookingService) { }

  ngOnInit() {
    this.userLocation = data.search.context.location;
    this.properties = data.results.items;
    this.auth.fetchProfileInformation().subscribe(user => {
      this.userInformation = user.user;
      localStorage.setItem('user', JSON.stringify(this.userInformation));
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

  private bookProperty(property: property) {
    this.toogle = true;
    const payload = {
      id: property.id,
      title: property.title,
      category: property.category.title,
      vicinity: property.vicinity,
      distance: property.distance
    }

    this.bookingService.postBookingInformation(this.userInformation._id, payload).subscribe((response) => {
      console.log("response", response);
      setTimeout(() => {
        this.toogle = false;
      }, 2000);
    })
  }
}