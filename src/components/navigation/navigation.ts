import { AfterViewInit, Component, inject, OnDestroy } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { TextHover } from '../text-hover/text-hover';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, MatRippleModule, TextHover],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation implements AfterViewInit, OnDestroy {
  private router = inject(Router);
  private currentPathSubscription: Subscription | undefined;

  public ngAfterViewInit() {
    this.currentPathSubscription = this.router.events.subscribe(() => {
      let path = this.router.url.split('/')[1];
      path = path === '' ? 'home' : path;
      this.setFontColorCurrentPage(path);
    });
  }

  public ngOnDestroy() {
    this.currentPathSubscription?.unsubscribe();
  }

  private setFontColorCurrentPage(path: string) {
    const links = document.querySelectorAll('nav a');
    links.forEach((link) => {
      const routerLink = link.getAttribute('routerLink');

      if (routerLink === path) {
        link.classList.add('current-page');
      } else {
        link.classList.remove('current-page');
      }
    });
  }
}
