import { Component, computed, inject, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthenticationModalService } from '../../security/authentication-modal-service/authentication-modal-service';
import { AuthenticationOptions } from '../../security/authentication-modal/authentication-modal';
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
  protected authenticationModalService = inject(AuthenticationModalService);

  protected toggleLightDarkTheme() {
    const body = document.body;
    const isLightMode = body.classList.contains('activate-light-mode');
    if (isLightMode) {
      this.renderer.removeClass(body, 'activate-light-mode');
    } else {
      this.renderer.addClass(body, 'activate-light-mode');
    }
  }

  // protected openModalAuthentication(type: AuthenticationOptions) {
  // const dialogConfig = new MatDialogConfig<AuthenticationModalProps>();
  // dialogConfig.autoFocus = false;
  // dialogConfig.data = { options: modalType };
  // this.matDialogService.open(AuthenticationModal, dialogConfig);
  // this.authenticationModalService.openModal(type);
  // }

  protected logout() {
    this.authService.logout();
  }
}
