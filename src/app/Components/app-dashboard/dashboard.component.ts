import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/authenticationService/authentication.service';
import { user } from '../../Models/user';
import { PropertyService } from '../../Services/propertyService/property.service';
import { location } from '../../Models/location';
// import data from '../../Shared/fake-data.json';
import { property } from '../../Models/property';
import { BookingService } from '../../Services/bookingService/booking.service';
import { SearchService } from '../../Services/searchService/search.service';
import { Router } from '@angular/router';

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
  private error = false;
  private searchText: string;
  private searchSubscription: any;

  constructor(
    private auth: AuthenticationService,
    private propertyService: PropertyService,
    private bookingService: BookingService,
    private searchService: SearchService,
    private router: Router,
  ) {
    this.searchSubscription = this.searchService.getMessage()
      .subscribe(message => {
        this.searchText = message.text;
      });
  }

  ngOnInit() {

    this.auth.fetchProfileInformation().subscribe(user => {
      this.userInformation = user.user;
      localStorage.setItem('user', JSON.stringify(this.userInformation));

      const localStorageProperties = JSON.parse(localStorage.getItem('properties'));
      if (localStorageProperties) {
        this.userLocation = localStorageProperties.search.context.location;
        this.properties = localStorageProperties.results.items;
      } else {
        this.propertyService.getProperties().subscribe(properties => {
          console.log("properties", properties);
          this.userLocation = properties.search.context.location;
          this.properties = properties.results.items;
          localStorage.setItem('properties', JSON.stringify(properties));
        });
      }
    }, (err) => {
      console.error(err);
    });
  }

  private bookProperty(property: property) {
    const payload = {
      id: property.id,
      title: property.title,
      category: property.category.title,
      vicinity: property.vicinity,
      distance: property.distance
    }
    this.bookingService.postBookingInformation(this.userInformation._id, payload).subscribe((response) => {
      this.toogle = true;
      setTimeout(() => {
        this.toogle = false;
      }, 2000);
    }, (err) => {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 2000);
    })
  }


  private viewProperty(property: property) {
    this.router.navigate(['/property', property.id]);
  }
}