import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MAT_BUTTON_CONFIG } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideRouter } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';
import { routes } from './app.routes';

const googleFirebaseProviders = [provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth())];
const googleFirestoreProviders = [provideFirestore(() => getFirestore())];
const globalFormFieldUIOptions = { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } };
const globalButtonUIOptions = { provide: MAT_BUTTON_CONFIG, useValue: { defaultAppearance: 'filled' } };
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    googleFirebaseProviders,
    googleFirestoreProviders,
    globalFormFieldUIOptions,
    globalButtonUIOptions,
  ],
};
