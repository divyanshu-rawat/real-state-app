import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LocationService } from '../locationService/location.service';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private apiurl: string;
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  private httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient, private locationService: LocationService) {
    this.locationService.getPosition().then(pos => {
      const appId = 'SdTuhGMGwWWx6EFxDEmm'; // TODO: Remove after verified by reviewer.
      const appCode = 'lmlX4F1r-Od90a1aZjqWsQ';
      const hereUrl = 'https://places.cit.api.here.com/places/v1/browse';
      this.apiurl = `${hereUrl}?app_id=${appId}&app_code=${appCode}&in=${pos.lat},${pos.lng};r=2000&cat=accommodation&pretty`;
    });
  }

  public getProperties(): Observable<any> {
    return this.http.get<any[]>(this.apiurl);
  }
}
