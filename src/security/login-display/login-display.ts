import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/authentication';

@Component({
  selector: 'app-login-display',
  imports: [],
  templateUrl: './login-display.html',
  styleUrl: './login-display.scss',
})
export class LoginDisplay {
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService
      .login('l.vogelsberger@innfactory.de', 'Finsterwalder-13')
      .pipe()
      .subscribe({
        next: (user) => {
          // redirect to dashbaord
          console.log(user);

          this.router.navigateByUrl('/private/dashboard');
        },
      });
  }
  // example register with email
  signUp() {
    const rnd = Math.floor(Math.random() * 1000);
    this.authService
      .signup(`l.vogelsberger@innfactory.de`, 'Finsterwalder-13', { bloodType: 'B+' })
      .pipe()
      .subscribe({
        next: (user) => {
          this.router.navigateByUrl('/private/dashboard');
        },
      });
  }
  // example login with google, later we need to figure out the new user
  loginGoogle() {
    this.authService
      .loginGoogle()
      .pipe()
      .subscribe({
        next: (user) => {
          this.router.navigateByUrl('/private/dashboard');
        },
      });
  }
}
