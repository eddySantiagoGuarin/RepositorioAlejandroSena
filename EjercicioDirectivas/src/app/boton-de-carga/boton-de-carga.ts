import { Component } from '@angular/core';

type estadoBoton = 'Cargar' | 'Borrar';
type estadoLista = 'Pendiente' | 'Cargando'| 'Exito' ;

@Component({
  selector: 'app-boton-de-carga',
  standalone: false,
  templateUrl: './boton-de-carga.html',
  styleUrl: './boton-de-carga.scss',
})
export class BotonDeCarga {

  boton: estadoBoton = 'Cargar';
  lista: estadoLista = 'Pendiente';

  videojuegos: string[] = [
    'The Legend of Zelda: Breath of the Wild',
    'Elden Ring',
    'Cyberpunk 2077',
    'Red Dead Redemption 2'
  ];

  cargarLista(){

    if(this.boton==='Cargar'){
      this.lista='Cargando'
      setTimeout(()=>{
        this.lista='Exito'
        this.boton='Borrar'
      },2000)
    }else{
      this.lista='Pendiente'
      this.boton='Cargar'
    }

  }

}
