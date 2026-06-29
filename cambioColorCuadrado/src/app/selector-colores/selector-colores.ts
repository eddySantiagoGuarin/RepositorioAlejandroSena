import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Colores =  'amarillo'| 'azul' | 'rojo' | 'blanco';

@Component({
  selector: 'app-selector-colores',
  imports: [FormsModule],
  templateUrl: './selector-colores.html',
  styleUrl: './selector-colores.scss',
})
export class SelectorColores {

  colorActual : Colores= 'blanco';

  seleccionarColor(colorNuevo:Colores){
    this.colorActual=colorNuevo;
  }

}
