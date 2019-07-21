import { Component, OnInit } from '@angular/core';
import { userForm } from '../../Models/userForm';
import { AuthenticationService } from '../../Services/authenticationService/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private warning: string;
  credentials: userForm = {
    email: '',
    password: ''
  };

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.loginUser(this.credentials).subscribe((response) => {
      this.router.navigate(['/dashboard']);
    }, (err) => {
      console.error(err);
      this.warning = err.error.error;
    });
  }

}
