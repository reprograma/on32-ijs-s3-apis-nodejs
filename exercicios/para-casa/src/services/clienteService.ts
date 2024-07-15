import { Cliente } from '../models/cliente';

export class ClienteService {
  private clientes: Cliente[] = [];

  adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  obterCliente(id: string): Cliente | undefined {
    return this.clientes.find(cliente => cliente.id === id);
  }
}
