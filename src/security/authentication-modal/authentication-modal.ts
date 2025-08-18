import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../authentication/authentication';
import { Login } from '../login/login/login';
import { Register } from '../register/register/register';

@Component({
  selector: 'app-authentication-modal',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, Login, Register],
  templateUrl: './authentication-modal.html',
  styleUrl: './authentication-modal.scss',
})
export class AuthenticationModal {
  private authService = inject(AuthService);

  protected async logout() {
    let logoutSuccess = false;
    logoutSuccess = await this.authService.logout();
    if (logoutSuccess) {
      console.log('Logout success');
    } else {
    }
  }
}
