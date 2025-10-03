import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UppercasePipe } from './shared/pipes/uppercase-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UppercasePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-Zero-to-Hero');
}
