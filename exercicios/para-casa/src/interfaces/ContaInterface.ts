export interface ContaInterface {
  numero: number;
  saldo: number;
  depositar(valor: number): void;
  sacar(valor: number): void;
  transferir(destino: ContaInterface, valor: number): void;
}
