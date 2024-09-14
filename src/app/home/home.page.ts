import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  cantidad: number = 0;        // Cantidad en pesos mexicanos
  resultadoDolares: number = 0; // Resultado en dólares
  resultadoEuros: number = 0;   // Resultado en euros

  constructor() {}

  calcular() {
    // Factores de conversión aproximados
    const factorDolar = 0.056; // 1 peso mexicano = 0.056 USD (ejemplo)
    const factorEuro = 0.052;  // 1 peso mexicano = 0.052 EUR (ejemplo)

    // Realizar la conversión
    this.resultadoDolares = this.cantidad * factorDolar;
    this.resultadoEuros = this.cantidad * factorEuro;
  }
}




