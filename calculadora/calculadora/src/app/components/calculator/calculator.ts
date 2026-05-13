import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: false,
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {

  num1: number = 0;
  num2: number = 0;
  result: number | string = 0;
  banderaNum2: boolean = false;
  operacion: string = '';
  mostrarValores: string = '';


  suma(a: number, b: number): number {
    return this.result = a + b;
  }

  resta(a: number, b: number): number {
    return this.result = a - b;
  }

  multiplicacion(a: number, b: number): number {
    return this.result = a * b;
  }

  division(a: number, b: number): number | string {
    if (b === 0) {
      return this.result = "No se puede dividir entre 0";
    } else {
      return this.result = a / b;
    }
  }

  presionarBoton(valor: string) {
    if (valor >= '0' && valor <= '9' && !this.banderaNum2) {
      this.num1 = parseFloat(this.num1.toString() + valor);
    } else if (valor >= '0' && valor <= '9' && this.banderaNum2) {
      this.num2 = parseFloat(this.num2.toString() + valor);
    } else if ((valor === '+' || valor === '-' || valor === '*' || valor === '/')) {
      this.banderaNum2 = true;
      this.operacion = valor;
    } else if (valor === 'c') {
      this.result = 0;
      this.num1 = 0;
      this.num2 = 0;
      this.banderaNum2 = false;
      this.operacion = '';
      this.mostrarValores = '';
    } else if (valor === '=') {
      switch (this.operacion) {
        case '+':
          this.result = this.suma(this.num1, this.num2);
          this.num1 = this.result;
          this.num2 = 0;
          break;
        case '-':
          this.result = this.resta(this.num1, this.num2);
          this.num1 = this.result;
          this.num2 = 0;
          break;
        case '*':
          this.result = this.multiplicacion(this.num1, this.num2);
          this.num1 = this.result;
          this.num2 = 0;
          break;
        case '/':
          this.result = this.division(this.num1, this.num2);
          this.num1 = parseFloat(this.result.toString());
          this.num2 = 0;
          break
        default:
      }
    } else {
      this.result = "Valor no válido";
    }

    if ( valor !== '=' && valor !== 'c') {
      this.mostrarValores += valor;
    }
  }
}

