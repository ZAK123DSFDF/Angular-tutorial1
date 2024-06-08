import { Component, OnInit, inject, signal } from '@angular/core';
import { CheckService } from '../../services/check.service';
import { CheckDirective } from '../../directives/check.directive';
import { FetchService } from '../../services/fetch.service';

@Component({
  selector: 'app-check',
  standalone: true,
  imports: [CheckDirective],
  templateUrl: './check.component.html',
  styles: ``,
})
export class CheckComponent implements OnInit {
  check = inject(CheckService);
  fetch = inject(FetchService);
  fetch1 = signal<any>(null);
  ngOnInit() {
    this.fetch.fetch().subscribe({
      next: (response: any) => {
        this.fetch1.set(response);
      },
      error: (error: any) => {
        console.log('something went wrong');
      },
    });
  }
}
