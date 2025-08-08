import { Component, inject, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  private renderer = inject(Renderer2);

  protected toggleLightDarkTheme() {
    const body = document.body;
    const isLightMode = body.classList.contains('activate-light-mode');
    if (isLightMode) {
      this.renderer.removeClass(body, 'activate-light-mode');
    } else {
      this.renderer.addClass(body, 'activate-light-mode');
    }
  }
}
