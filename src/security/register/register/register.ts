import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationModalService } from '../../authentication-modal-service/authentication-modal-service';
import { AuthenticationOptions } from '../../authentication-modal/authentication-modal';
import { AuthService } from '../../authentication/authentication';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  protected authenticationModalService = inject(AuthenticationModalService);
  private authService = inject(AuthService);
  protected signUpForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required),
  });

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
      this.authenticationModalService.closeModal();
      this.authenticationModalService.openModal(AuthenticationOptions.login);
    }
  }
}
