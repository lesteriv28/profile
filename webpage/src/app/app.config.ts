import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    providePrimeNG({
      license: 'eyJpZCI6IjlhM2MwM2Q0LWEzM2QtNDI5Ni1iMzc1LWY0Njc2NmU5NDA2MiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODkwOTk3NzksImV4cCI6MTgyMDYzNTc3OX0.nMBYbDW-Y5nazmnUxph0Tg9n_5-qtMV4yv1bapOvSGoaiGZcFhXVeFDvo_yFvjGGTEIRBx3UM0Ftcu8tzcTYBA',
      theme: {
        preset: Aura
      }
    }),
    provideHttpClient()
  ]
};
