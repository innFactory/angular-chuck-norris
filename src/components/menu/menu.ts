import { Component, computed, inject, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthenticationModal, AuthenticationModalProps, AuthenticationOptions } from '../../security/authentication-modal/authentication-modal';
import { AuthService } from '../../security/authentication/authentication';

@Component({
  selector: 'app-menu',
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  private renderer = inject(Renderer2);
  private authService = inject(AuthService);
  protected isAuthenticated = computed(this.authService.isAuthenticated);
  protected AuthenticationOptions = AuthenticationOptions;
  private readonly matDialogService = inject(MatDialog);

  protected toggleLightDarkTheme() {
    const body = document.body;
    const isLightMode = body.classList.contains('activate-light-mode');
    if (isLightMode) {
      this.renderer.removeClass(body, 'activate-light-mode');
    } else {
      this.renderer.addClass(body, 'activate-light-mode');
    }
  }

  protected openModalAuthentication(modalType: AuthenticationOptions) {
    const dialogConfig = new MatDialogConfig<AuthenticationModalProps>();
    dialogConfig.autoFocus = false;
    dialogConfig.data = { options: modalType };
    this.matDialogService.open(AuthenticationModal, dialogConfig);
  }

  protected logout() {
    this.authService.logout();
  }
}
