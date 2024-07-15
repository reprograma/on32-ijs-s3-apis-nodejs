import { Cliente } from './cliente';
import { GerenteInterface } from '../interfaces/gerenteInterface';

export class Gerente implements GerenteInterface {
  constructor(
    public nomeCompleto: string,
    public id: string,
    public clientes: Cliente[] = []
  ) {}

  adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  removerCliente(clienteId: string): void {
    this.clientes = this.clientes.filter(c => c.id !== clienteId);
  }

  abrirConta(cliente: Cliente, conta: ContaBancaria): void {
    cliente.abrirConta(conta);
  }

  fecharConta(cliente: Cliente, conta: ContaBancaria): void {
    cliente.fecharConta(conta);
  }

  mudarTipoConta(cliente: Cliente, conta: ContaBancaria, novoTipo: string): void {
    cliente.mudarTipoConta(conta, novoTipo);
  }
}
