export interface ClienteInterface {
  nomeCompleto: string;
  id: string;
  endereco: string;
  telefone: string;
  rendaSalarial: number;
  contas: any[];
  gerente: any | null;
}
