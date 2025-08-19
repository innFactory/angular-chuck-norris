import { Component, computed, inject, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../security/auth/auth-service';
import { AuthenticationModalService } from '../../security/auth/authentication-modal-service';
import { AuthenticationOptions } from '../../security/auth/authentication-modal/authentication-modal';
import { FavouriteChuckJokesSignalService } from '../../shared/services/favourite-chuck-jokes/favourite-chuck-jokes-signal';

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
  private favouriteChuckJokesSignalService = inject(FavouriteChuckJokesSignalService);

  protected toggleLightDarkTheme() {
    const body = document.body;
    const isLightMode = body.classList.contains('activate-light-mode');
    if (isLightMode) {
      this.renderer.removeClass(body, 'activate-light-mode');
    } else {
      this.renderer.addClass(body, 'activate-light-mode');
    }
  }

  protected async logout() {
    const logoutSuccess = await this.authService.logout();
    if (logoutSuccess) {
      this.favouriteChuckJokesSignalService.set([]);
    }
  }
}
