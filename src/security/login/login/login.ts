import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationModalService } from '../../authentication-modal-service/authentication-modal-service';
import { AuthService } from '../../authentication/authentication';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService);
  protected authenticationModalService = inject(AuthenticationModalService);

  protected loginForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
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
      this.authenticationModalService.closeModal();
    }
  }
}
