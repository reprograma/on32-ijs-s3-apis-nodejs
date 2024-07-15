import { Request, Response } from 'express';
import { ClienteService } from '../services/clienteService';
import { Cliente } from '../models/cliente';

const clienteService = new ClienteService();

export const criarCliente = (req: Request, res: Response) => {
  const { nomeCompleto, id, endereco, telefone, rendaSalarial } = req.body;
  const cliente = new Cliente(nomeCompleto, id, endereco, telefone, rendaSalarial);
  clienteService.adicionarCliente(cliente);
  res.status(201).json(cliente);
};

export const obterCliente = (req: Request, res: Response) => {
  const { id } = req.params;
  const cliente = clienteService.obterCliente(id);
  if (cliente) {
    res.json(cliente);
  } else {
    res.status(404).send('Cliente não encontrado');
  }
};
