import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: false,
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {

  @Output() enviarValor = new EventEmitter<string>();

  emitirEvento(valor: string) {
    this.enviarValor.emit(valor);
  }

}
