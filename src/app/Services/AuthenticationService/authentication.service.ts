import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { user } from '../../Models/user';
import { token } from '../../Models/token';
import { userForm } from '../../Models/userForm';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly apiurl = 'http://localhost:4000/api/';
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  private httpOptions = {
    headers: this.headers
  };
  private token: string;
  constructor(private http: HttpClient, private router: Router) { }

  private setToken(token: string): void {
    localStorage.setItem('jwt', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('jwt');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('jwt');
    this.router.navigateByUrl('/');
  }

  public getUserDetails(): user {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public registerUser(credentials: userForm): Observable<any> {
    return this.http.post<any>(this.apiurl + 'user/register', credentials, this.httpOptions);
  }

  public loginUser(credentials: userForm): Observable<any> {
    return this.http.post<any>(this.apiurl + 'user/authenticate', credentials, this.httpOptions)
      .pipe(
        map((data: token) => {
          if (data.token) {
            this.setToken(data.token);
          }
          return data;
        })
      );
  }

  public fetchProfileInformation(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.getToken()
      })
    };
    return this.http.get<any>(this.apiurl + 'user/profile', httpOptions);
  }
}
