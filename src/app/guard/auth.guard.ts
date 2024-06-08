import { inject, signal } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard = () => {
  const check = signal<boolean>(true);
  const router = inject(Router);
  if (check()) {
    return true;
  }
  return router.navigate(['']);
};
