import { ContaBancaria } from './conta';
import { Cliente } from './cliente';

export class ContaPoupanca extends ContaBancaria {
  private taxaJuros: number = 0.02;

  constructor(numero: number, saldo: number, cliente: Cliente) {
    super(numero, saldo, cliente);
  }

  calcularTaxa(): number {
    return this.saldo * this.taxaJuros;
  }
}
