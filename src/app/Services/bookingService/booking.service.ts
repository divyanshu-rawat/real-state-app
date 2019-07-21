import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authenticationService/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly apiurl = 'http://localhost:4000/api/';
  constructor(private http: HttpClient, private auth: AuthenticationService) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'access-token': this.auth.getToken()
    })
  };

  public fetchBookingsInformation(userId): Observable<any[]> {
    return this.http.get<any[]>(this.apiurl + 'user/' + userId + '/bookings', this.httpOptions);
  }

  public postBookingInformation(userId, payload): Observable<any> {
    return this.http.post<any>(this.apiurl + 'user/' + userId + '/bookings', payload, this.httpOptions);
  }

  public listOfUsersInBookedProperty(propertyId) {
    return this.http.get<any>(this.apiurl + 'properties/' + propertyId + '/bookings', this.httpOptions);
  }

}
