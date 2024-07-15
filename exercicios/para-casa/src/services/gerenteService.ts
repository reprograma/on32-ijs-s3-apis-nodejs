import { Gerente } from '../models/gerente';

export class GerenteService {
  private gerentes: Gerente[] = [];

  adicionarGerente(gerente: Gerente): void {
    this.gerentes.push(gerente);
  }

  obterGerente(id: string): Gerente | undefined {
    return this.gerentes.find(gerente => gerente.id === id);
  }
}
