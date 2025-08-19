import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthenticationModal, AuthenticationModalProps, AuthenticationOptions } from '../authentication-modal/authentication-modal';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationModalService {
  private readonly matDialogService = inject(MatDialog);
  // private authenticationOptions = AuthenticationOptions;

  public openModal(type: AuthenticationOptions) {
    const dialogConfig = new MatDialogConfig<AuthenticationModalProps>();
    // dialogConfig.autoFocus = false;
    dialogConfig.data = { options: type };
    this.matDialogService.open(AuthenticationModal, dialogConfig);
  }

  public closeModal() {
    this.matDialogService.closeAll();
  }
}
