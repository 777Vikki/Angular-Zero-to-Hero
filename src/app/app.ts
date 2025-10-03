import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightElementRef } from './shared/directives/highlight-element-ref';
import { HighlightHostbinding } from './shared/directives/highlight-hostbinding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HighlightElementRef, HighlightHostbinding],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-Zero-to-Hero');
}
