import { ContaBancaria } from './conta';
import { Cliente } from './cliente';

export class ContaCorrente extends ContaBancaria {
  private chequeEspecial: number = 100;

  constructor(numero: number, saldo: number, cliente: Cliente) {
    super(numero, saldo, cliente);
  }

  sacar(valor: number): void {
    if (valor <= this.saldo + this.chequeEspecial) {
      this.saldo -= valor;
    } else {
      console.log('Saldo insuficiente, mesmo considerando o cheque especial');
    }
  }
}
