import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../Services/bookingService/booking.service';
import { user } from '../../Models/user';

@Component({
  selector: 'app-app-property-users',
  templateUrl: './app-property-users.component.html',
  styleUrls: ['./app-property-users.component.scss']
})
export class AppPropertyUsersComponent implements OnInit {
  private id: string;
  private userInformation: user;
  private bookedBy: any[];
  private warning: boolean;
  constructor(private route: ActivatedRoute, private bookingService: BookingService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userInformation = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
    this.bookingService.listOfUsersInBookedProperty(this.id).subscribe((response) => {
      if (response.length == 0) {
        this.warning = true;
      }
      this.bookedBy = response;
    }, (err) => {
      throw err;
    })
  }

}
