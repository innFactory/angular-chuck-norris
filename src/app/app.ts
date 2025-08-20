import { Component, inject, OnDestroy } from '@angular/core';
import { Content } from '../components/content/content';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { AuthService } from '../security/auth/auth-service';

@Component({
  selector: 'app-root',
  imports: [Header, Content, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnDestroy {
  private authService = inject(AuthService);

  public ngOnDestroy() {
    this.authService.logout();
  }
}
