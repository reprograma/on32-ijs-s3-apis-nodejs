import { ContaBancaria } from './conta';
import { Gerente } from './gerente';
import { ClienteInterface } from '../interfaces/clienteInterface';

export class Cliente implements ClienteInterface {
  constructor(
    public nomeCompleto: string,
    public id: string,
    public endereco: string,
    public telefone: string,
    public rendaSalarial: number,
    public contas: ContaBancaria[] = [],
    public gerente: Gerente | null = null
  ) {}

  abrirConta(conta: ContaBancaria): void {
    this.contas.push(conta);
  }

  fecharConta(conta: ContaBancaria): void {
    this.contas = this.contas.filter(c => c !== conta);
  }

  mudarTipoConta(conta: ContaBancaria, novoTipo: string): void {
    const index = this.contas.indexOf(conta);
    if (index !== -1) {
      this.contas[index] = conta;
    }
  }
}
