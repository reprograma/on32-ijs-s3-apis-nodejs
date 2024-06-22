# Desafio Semanal

### Objetivos de aprendizagem do desafio 🎯

- Entender como o TypeScript, uma linguagem de programação superset de JavaScript, se integra naturalmente ao ecossistema do Node.js.
- Compreender os princípios e características de uma arquitetura RESTful.
- Identificar os recursos, URIs, métodos HTTP e códigos de status comuns em uma API REST.
- Aprender a projetar e implementar uma API RESTful usando Node.js, seguindo as melhores práticas de REST.


<h2 align=center> {Reprograma}Bank </h2>
<h3>Disponibilizando nossa API</h3>

Seu desafio é criar uma API RESTful para o sistema bancário desenvolvido na semana 2, agora incluindo a funcionalidade de Gerente de Conta. O Gerente é responsável por gerenciar os clientes e suas contas, podendo abrir, fechar e modificar o tipo de conta.

Abaixo estão os requisitos:

Ao cliente do banco ser adicionadas as seguintes informações:

- Contas
- Gerente

Gerente deve ter as seguintes informações:

- Nome completo
- Número de identificação (ID)
- Clientes

#### Requisitos de negócio:

- Criar classes para representar Cliente e Gerente, incluindo os atributos mencionados no diagrama.
- Implementar métodos nas classes Cliente e Gerente para abrir, fechar e modificar o tipo de conta.
- Atualizar a classe Conta para manter uma referência ao cliente associado a ela.
- Implementar métodos na classe Gerente para adicionar e remover clientes, bem como para abrir, fechar e modificar o tipo de conta para um determinado cliente.
- Organizar a estrutura do projeto de forma apropriada, seguindo as melhores práticas para uma API RESTful.

### Diagrama:

```lua
+---------------------------------+
|           Cliente               |
+---------------------------------+
| - nomeCompleto: string          |
| - id: string                    |
| - endereco: string              |
| - telefone: string              |
| - contas: ContaBancaria[]       |
| - gerente: Gerente              |
+---------------------------------+
| + constructor(...)              |
| + abrirConta(conta: ContaBancaria): void |
| + fecharConta(conta: ContaBancaria): void |
| + mudarTipoConta(conta: ContaBancaria, novoTipo: string): void |
+---------------------------------+
              |
              |
     +--------+---------+
     |                  |
+----v----+      +------v------+
| Conta   |      | ContaCorrente|
+---------+      +-------------+
| # saldo |      | # chequeEspecial: number
+---------+      +-------------+
| depositar(valor: number): void |
| sacar(valor: number): void     |
| verificarSaldo(): number       |
| transferir(destino: ContaBancaria, valor: number): void |
+-----------------+
        ^
        |
+-------+-------+
|               |
| ContaPoupanca |
+---------------+
| # taxaJuros: number
+---------------+
| calcularTaxa(): number |
| transferir(destino: ContaBancaria, valor: number): void |
+---------------+

+-----------------------+
|        Gerente        |
+-----------------------+
| - nomeCompleto: string|
| - id: string          |
| - clientes: Cliente[] |
+-----------------------+
| + constructor(...)    |
| + adicionarCliente(cliente: Cliente): void |
| + removerCliente(cliente: Cliente): void |
| + abrirConta(cliente: Cliente, tipoConta: string): void |
| + fecharConta(cliente: Cliente, conta: ContaBancaria): void |
| + mudarTipoConta(cliente: Cliente, conta: ContaBancaria, novoTipo: string): void |
+-----------------------+

```
