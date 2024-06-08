import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckService {
  constructor() {}
  check = signal<number>(0);
  increment() {
    this.check.update((v) => v + 1);
  }
}
