import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../authentication/authentication';

@Component({
  selector: 'app-login-display',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login-display.html',
  styleUrl: './login-display.scss',
})
export class LoginDisplay {
  private authService = inject(AuthService);

  protected loginForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  protected signUpForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required),
  });

  protected async login() {
    const isLoginFormValid = this.loginForm.valid;
    if (!isLoginFormValid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const mail = this.loginForm.controls.mail.value ?? '';
    const password = this.loginForm.controls.password.value ?? '';
    let logInSuccess = false;
    logInSuccess = await this.authService.login(mail, password);
    if (logInSuccess) {
      //TODO navigate
    }
  }

  protected async signup() {
    const isSignupFormValid = this.signUpForm.valid;
    if (!isSignupFormValid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    const mail = this.signUpForm.controls.mail.value ?? '';
    const password = this.signUpForm.controls.password.value ?? '';
    const password_confirmation = this.signUpForm.controls.password_confirmation.value ?? '';
    const doPasswordsMatch = password === password_confirmation;
    if (!doPasswordsMatch) {
      console.log('Passwörter stimmen nicht überein');
      this.signUpForm.controls.password.reset();
      this.signUpForm.controls.password_confirmation.reset();
      return;
    }
    let signupSuccess = false;
    signupSuccess = await this.authService.signup(mail, password, {});
    if (signupSuccess) {
      //TODO navigate
    }
  }
  protected async logout() {
    let logoutSuccess = false;
    logoutSuccess = await this.authService.logout();
    if (logoutSuccess) {
      console.log('Logout success');
    } else {
    }
  }
}
