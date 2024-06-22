# CRUD: to-do list

## Índice
- [O que é?](#o-que-é)
  - TL;DR
- [Métodos HTTP mais comuns](#métodos-http-mais-comuns)
  - [GET](#get)
    - [Parâmetros](#parâmetros)
      - [Path Params](#path-params)
      - [Query Params](#query-params)
      - [Body Params](#body-params)
  - [POST](#post)
  - [DELETE](#delete)
  - [PUT x PATCH](#put-x-patch)

### O que é?
**TL;DR**
Um CRUD é uma aplicação básica que permite criar, ler, atualizar e deletar dados. No contexto de uma lista de tarefas (to-do list), isso significa poder adicionar novas tarefas, listar todas as tarefas, atualizar o status ou descrição de uma tarefa existente e deletar tarefas que não são mais necessárias.

### Métodos HTTP mais comuns

##### Parâmetros
- **Path Params**: Parâmetros que fazem parte da URL.
- **Query Params**: Parâmetros que são passados após o símbolo "?" na URL.
- **Body Params**: Parâmetros que são passados no corpo da requisição. (Não é comum em requisições GET)

#### GET
O método GET é usado para recuperar informações do servidor. É uma requisição sem efeitos colaterais, ou seja, não altera o estado do servidor.

#### POST
O método POST é usado para enviar dados ao servidor para criar um novo recurso.

#### DELETE
O método DELETE é usado para deletar um recurso no servidor.

#### PUT x PATCH
- **PUT**: Atualiza um recurso por completo.
- **PATCH**: Atualiza parcialmente um recurso.