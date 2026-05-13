import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: false,
  templateUrl: './display.html',
  styleUrl: './display.scss',
})
export class Display {

  @Input() valor: string | number = '0';

  @Input() mostrarValores: string ='';

}
