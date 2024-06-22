# REST e RESTFULL

## Índice
- [API REST](#api-rest-representational-state-transfer)
- [API RESTFull](#api-restful)
  - [HATEOAS](#hateoas-hypermedia-as-the-engine-of-application-state)

> 📝 **TL;DR** 
*API REST* refere-se à abordagem arquitetural em si, descrevendo os princípios gerais que guiam a criação de serviços web. *API RESTful* é uma implementação específica de uma API que adere aos princípios do REST, seguindo as diretrizes e boas práticas estabelecidas.
📌``todas as APIs RESTful são APIs REST, mas nem todas as APIs REST são necessariamente RESTful``

### API REST (Representational State Transfer):
Uma abordagem arquitetural para projetar serviços web que são escaláveis, confiáveis e fáceis de manter. As APIs REST são baseadas nos princípios fundamentais do HTTP e do REST.

- Usa os métodos HTTP (GET, POST, PUT, DELETE) para realizar operações em recursos.
- Usa URIs (Uniform Resource Identifiers) para identificar e acessar recursos.
- Retorna dados no formato JSON ou XML.
- Stateless: Cada solicitação HTTP contém todas as informações necessárias para ser processada pelo servidor.
- Integração com CRUD (Create, Read, Update, Delete): Os métodos HTTP são mapeados para operações CRUD no servidor.

#### Stateless(Sem estado)
Isso implica que o servidor não mantém nenhuma informação sobre o estado da sessão do cliente entre as solicitações. Cada solicitação é tratada de forma independente e autônoma.

### API RESTFul:
Uma API que segue os princípios do REST. Ou seja, é uma API que adere aos princípios de design e arquitetura estabelecidos pelo REST.

- Usa os mesmos princípios fundamentais do REST.
- Foca em recursos (entidades de negócio) e ações sobre esses recursos usando métodos HTTP.
- Utiliza URIs amigáveis e semânticas para identificar e acessar recursos.
- Fornece respostas bem estruturadas e padronizadas usando os códigos de status HTTP apropriados.
- Pode implementar a negociação de conteúdo, permitindo que os clientes solicitem dados em diferentes formatos (JSON, XML, etc.).
- Pode oferecer suporte a ``HATEOAS`` (Hypertext As The Engine Of Application State), permitindo a descoberta dinâmica de recursos relacionados por meio de links.

#### HATEOAS (Hypermedia As the Engine Of Application State)
HATEOAS é um princípio de design de APIs RESTful que promove a descoberta dinâmica de recursos e transições de estado através de links hipertextuais. 

Em essência, um cliente interage com a API iniciando em um ponto de entrada conhecido e, em seguida, segue os links fornecidos pela resposta do servidor para descobrir e navegar por outros recursos relacionados.Permitindo que a API informe dinamicamente ao cliente quais ações são permitidas em determinado estado e quais recursos estão disponíveis para interação.

Isso promove uma arquitetura mais flexível e desacoplada, onde o cliente não precisa ter conhecimento prévio das URIs e métodos de solicitação HTTP para interagir com a API.

**Exemplo retorno API Restfull seguindo HATEOAS**

> Suponha que você esteja desenvolvendo uma API de e-commerce e deseja retornar informações sobre um produto específico. 

O retorno RESTful seguindo o princípio HATEOAS pode ser algo assim:

```json
{
  "id": 1,
  "name": "Product A",
  "description": "Description of Product A",
  "price": 29.99,
  "links": [
    {
      "rel": "self",
      "href": "/products/1"
    },
    {
      "rel": "update",
      "href": "/products/1",
      "method": "PUT"
    },
    {
      "rel": "delete",
      "href": "/products/1",
      "method": "DELETE"
    }
  ]
}

```
Essa abordagem de incluir links na resposta permite que o cliente descubra dinamicamente as operações disponíveis para o recurso e interaja com a API de forma mais flexível e desacoplada, seguindo os princípios do HATEOAS (Hypertext as the Engine of Application State).

- Cada link possui um atributo "rel" que descreve o tipo de relação entre o recurso atual e o recurso vinculado pelo link.
- Cada link possui um atributo "href" que fornece o URI para acessar o recurso vinculado.
- Além disso, os links para atualização e exclusão também incluem o atributo "method" que especifica o método HTTP a ser usado para executar a operação no recurso vinculado.


**Exemplo retorno API Rest, mas não RestFull**

```json
{
  "id": 1,
  "name": "Product A",
  "description": "Description of Product A",
  "price": 29.99,
  "links": [
    {
      "rel": "self",
      "href": "/products/1"
    },
    {
      "rel": "update",
      "href": "/products/1/update"
    },
    {
      "rel": "delete",
      "href": "/products/1/delete"
    }
  ]
}

```

No exemplo dado, os links para operações de atualização e exclusão do produto estão presentes, mas são estáticos e não estão contextualmente relacionados aos recursos. Portanto, o cliente precisa ter conhecimento prévio dessas URIs para realizar as operações, o que viola o princípio HATEOAS.