import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { user } from '../../Models/user';
import { token } from '../../Models/token';
import { tokenPayload } from '../../Models/tokenPayload';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

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
    window.localStorage.removeItem('mean-token');
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

  private request(method: 'post' | 'get', type: 'authenticate' | 'register' | 'profile', user?: tokenPayload): Observable<any> {
    let base: Observable<any>;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user);
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    }

    const request = base.pipe(
      map((data: token) => {
        if (data.token) {
          this.setToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public register(user: tokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: tokenPayload): Observable<any> {
    return this.request('post', 'authenticate', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }


}
