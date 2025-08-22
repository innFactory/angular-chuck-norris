import { inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private snackbarService = inject(MatSnackBar);
  public isAuthenticated = signal(false);

  public async login(email: string, password: string): Promise<boolean> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.snackbarService.open('✅  Anmeldung erfolgreich');
      this.isAuthenticated.set(true);
      return true;
    } catch (error) {
      this.snackbarService.open('❌  Anmeldung fehlgeschlagen');
      return false;
    }
  }

  public async logout(): Promise<boolean> {
    try {
      await signOut(this.auth);
      this.snackbarService.open('✅  Du bist abgemeldet');
      this.isAuthenticated.set(false);
      return true;
    } catch (error) {
      this.snackbarService.open('❌  Abmeldung fehlgeschlagen');
      return false;
    }
  }

  public async signup(email: string, password: string, custom: any): Promise<boolean> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.snackbarService.open('✅  Registrierung erfolgreich');
      return true;
    } catch (error) {
      this.snackbarService.open('❌  Registrierung fehlgeschlagen');
      return false;
    }
  }

  public checkAuthenticated(): boolean {
    const isAuthenticated = this.auth.currentUser !== null;
    if (!isAuthenticated) {
      this.snackbarService.open('❌ Nicht in Firebase angemeldet');
      throw new Error('User not logged in.');
    }
    this.isAuthenticated.set(isAuthenticated);
    return isAuthenticated;
  }
}
