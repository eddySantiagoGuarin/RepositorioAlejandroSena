import { Component, signal } from '@angular/core';
import { SelectorColores } from './selector-colores/selector-colores';

@Component({
  selector: 'app-root',
  imports: [SelectorColores],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cambioColorCuadrado');
}
