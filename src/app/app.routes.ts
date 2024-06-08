import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: 'check',
    loadComponent: async () => {
      const m = await import('./components/check/check.component');
      return m.CheckComponent;
    },
    canActivate: [authGuard],
  },
];
