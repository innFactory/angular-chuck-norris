import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../authentication/authentication';
import { Login } from '../login/login/login';

import { Register } from '../register/register/register';

export enum AuthenticationOptions {
  login = 'login',
  signin = 'signin ',
}

export interface AuthenticationModalProps {
  options: AuthenticationOptions;
}

@Component({
  selector: 'app-authentication-modal',
  imports: [MatDialogModule, MatInputModule, MatButtonModule, Login, Register],
  templateUrl: './authentication-modal.html',
  styleUrl: './authentication-modal.scss',
})
export class AuthenticationModal {
  @Inject(MAT_DIALOG_DATA) public data: AuthenticationModalProps | undefined;

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
