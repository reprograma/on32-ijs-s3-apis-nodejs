import { Request, Response } from 'express';
import { GerenteService } from '../services/gerenteService';
import { Gerente } from '../models/gerente';

const gerenteService = new GerenteService();

export const criarGerente = (req: Request, res: Response) => {
  const { nomeCompleto, id } = req.body;
  const gerente = new Gerente(nomeCompleto, id);
  gerenteService.adicionarGerente(gerente);
  res.status(201).json(gerente);
};

export const obterGerente = (req: Request, res: Response) => {
  const { id } = req.params;
  const gerente = gerenteService.obterGerente(id);
  if (gerente) {
    res.json(gerente);
  } else {
    res.status(404).send('Gerente não encontrado');
  }
};
