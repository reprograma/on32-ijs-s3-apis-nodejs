import { Cliente } from './models/cliente';
import { Gerente } from './models/gerente';
import { ContaCorrente } from './models/contaCorrente';
import { ContaPoupanca } from './models/contaPoupanca';
import { ClienteService } from './services/clienteService';
import { GerenteService } from './services/gerenteService';

const clienteService = new ClienteService();
const gerenteService = new GerenteService();

const gerente = new Gerente('Maria Gerente', '1');
gerenteService.adicionarGerente(gerente);

const cliente = new Cliente('João Cliente', '1', 'Rua A, 123', '9999-8888', 1000);
clienteService.adicionarCliente(cliente);

const contaCorrente = new ContaCorrente(1, 0, cliente);
const contaPoupanca = new ContaPoupanca(2, 0, cliente);

gerente.abrirConta(cliente, contaCorrente);
gerente.abrirConta(cliente, contaPoupanca);

console.log('Clientes:', clienteService.obterCliente('1'));
console.log('Gerentes:', gerenteService.obterGerente('1'));
