import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  http = inject(HttpClient);
  constructor() {}
  option = {
    withCredentials: true,
  };
  fetch() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/posts',
      this.option
    );
  }
}
