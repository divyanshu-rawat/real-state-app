import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../Services/bookingService/booking.service';
import { user } from '../../Models/user';

@Component({
  selector: 'app-app-booking',
  templateUrl: './app-booking.component.html',
  styleUrls: ['./app-booking.component.sass']
})
export class AppBookingComponent implements OnInit {
  private bookings: any[];
  private userInformation: user;
  constructor(private bookingService: BookingService) {
    this.userInformation = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
    const userId = this.userInformation._id;
    this.bookingService.fetchBookingsInformation(userId).subscribe((bookings) => {
      this.bookings = bookings;
    })
  }

}
