import { Injectable } from '@angular/core';
import { AuthenticationService } from '../AuthenticationService/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly apiurl = 'http://localhost:4000/api/user/';
  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  public fetchBookingsInformation(userId): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.auth.getToken()
      })
    };
    return this.http.get<any>(this.apiurl + userId + '/bookings', httpOptions);
  }
}
