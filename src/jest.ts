import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
setupZoneTestEnv({
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true,
});

/* Imports here */
import { registerLocaleData } from '@angular/common';
import localDateDe from '@angular/common/locales/de';

/* Global jest providers here */
registerLocaleData(localDateDe); //Global language
