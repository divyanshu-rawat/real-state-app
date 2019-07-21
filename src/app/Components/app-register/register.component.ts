import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Services/authenticationService/authentication.service';
import { userForm } from '../../Models/userForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  private credentials: userForm = {
    email: '',
    username: '',
    password: ''
  };
  constructor(private authenticationService: AuthenticationService, private router: Router) { }
  ngOnInit() { };
  register() {
    this.authenticationService.registerUser(this.credentials).subscribe((response) => {
      this.router.navigate(['/dashboard']);
    }, (err) => {
      console.error(err);
    });
  }

}
