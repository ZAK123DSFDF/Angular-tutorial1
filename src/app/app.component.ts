import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckComponent } from './components/check/check.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CheckComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tutorial1';
}
