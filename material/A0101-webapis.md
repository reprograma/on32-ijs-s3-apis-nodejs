# WEB APIs e APIs

## Índice
- [API X Web APIs](#api-x-web-api)
    - [API](#apis)
    - [Web API](#web-api)
    - [Comparação](#comparação)
- [Consumindo Web APIs](#consumindo-web-apis)
    - [Ferramentas ](#ferramentas-para-consumir-apis)

### API X Web API

> 📝 **TL;DR** 
*API* é um termo genérico que se refere a qualquer interface que permite a comunicação entre diferentes partes de um software ou entre diferentes sistemas. 
*Web API* é um tipo específico de API projetada para ser acessível via web, utilizando a infraestrutura da web para permitir a comunicação entre clientes (como navegadores web, aplicativos móveis) e servidores.

#### API
Uma API é um conjunto de regras e definições que permitem que uma aplicação ou serviço interaja com outras aplicações ou serviços. As APIs facilitam a comunicação entre diferentes partes de um software ou entre diferentes softwares.

- **Contexto de Uso:** APIs podem ser usadas em diversos contextos, não apenas na web. Elas são amplamente utilizadas em sistemas operacionais, bibliotecas de software, frameworks e dispositivos de hardware.

- **Meios de Comunicação:** A comunicação pode ocorrer de várias maneiras, incluindo chamadas de função, trocas de mensagens, chamadas de sistema operacional, etc.

- **Exemplos:**
    - APIs de bibliotecas gráficas como OpenGL.
    - APIs de sistemas operacionais como Windows API.
    - APIs de bibliotecas de machine learning como TensorFlow.

#### Web API
Uma Web API é um tipo específico de API que é acessível via protocolos da web, como HTTP ou SOAP. Elas permitem que aplicações se comuniquem através da internet.

- **Contexto de Uso:** Web APIs são especificamente projetadas para serem usadas na web, facilitando a interação entre diferentes sistemas através da internet.

- **Meios de Comunicação:** A comunicação é feita através de requisições HTTP/HTTPS. As respostas são frequentemente no formato JSON ou XML.

- **Exemplos:**
    - RESTful APIs: APIs que seguem o estilo arquitetural REST (Representational State Transfer).
    - SOAP APIs: APIs que utilizam o protocolo SOAP (Simple Object Access Protocol).
    - GraphQL APIs: APIs que utilizam a linguagem de consulta GraphQL.


#### Comparação

| Característica            | API                             | Web API                          |
|---------------------------|---------------------------------|----------------------------------|
| **Definição**             | Interface para comunicação entre softwares. | Interface baseada na web para comunicação via HTTP/HTTPS. |
| **Contexto de Uso**       | Diversos (SO, bibliotecas, frameworks, etc.) | Especificamente na web (internet). |
| **Meios de Comunicação**  | Chamadas de função, mensagens, chamadas de sistema, etc. | Requisições HTTP/HTTPS. |
| **Formatos de Resposta**  | Vários, dependendo do contexto (binário, texto, etc.) | Principalmente JSON ou XML. |
| **Exemplos**              | Windows API, OpenGL, TensorFlow. | RESTful APIs, SOAP APIs, GraphQL APIs. |

### Consumindo APIs
Consumir uma API envolve fazer solicitações a esses endpoints e processar as respostas recebidas. Esse processo pode ser realizado em diversas linguagens de programação e usando várias ferramentas.

#### Ferramentas para consumir APIs
- **Insomnia/Postman:** Ferramentas de teste de APIs que permitem enviar solicitações HTTP e ver as respostas.
- **Curl:** Utilitário de linha de comando para transferir dados de ou para um servidor.
- **Bibliotecas/Frameworks:** Muitas linguagens de programação possuem bibliotecas/frameworks para facilitar o consumo de APIs (fetch em JavaScript, axios em TypeScript ou frameworks como NestJS HttpModule).

**Exemplo com Curl**
```sh
curl https://api.coindesk.com/v1/bpi/currentprice.json
```

---

**Exemplo com JavaScript**:
muito usado no front-end

```js
// Consumindo a API pública do CoinDesk para obter o preço do Bitcoin
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => response.json())
  .then(data => {
    console.log(`O preço atual do Bitcoin é ${data.bpi.USD.rate}`);
  })
  .catch(error => {
    console.error('Erro ao consumir a API:', error);
  });
```

---

**Exemplo com TypeScript usando Axios**:

```typescript
import axios from 'axios';

async function getBitcoinPrice() {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    console.log(`O preço atual do Bitcoin é ${response.data.bpi.USD.rate}`);
  } catch (error) {
    console.error('Erro ao consumir a API:', error);
  }
}

getBitcoinPrice();

```

---
**Exemplo com NestJS usando HttpModule**

```typescript
import { Injectable, Module, HttpService } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Injectable()
class BitcoinService {
  constructor(private readonly httpService: HttpService) {}

  async getBitcoinPrice() {
    try {
      const response = await this.httpService.get('https://api.coindesk.com/v1/bpi/currentprice.json').toPromise();
      console.log(`O preço atual do Bitcoin é ${response.data.bpi.USD.rate}`);
    } catch (error) {
      console.error('Erro ao consumir a API:', error);
    }
  }
}

```

### Pra testar
Aqui estão algumas APIs gratuitas e úteis no nosso curso:


**CoinDesk API**
- URL: https://api.coindesk.com/v1/bpi/currentprice.json
- Descrição: Fornece o preço atual do Bitcoin em várias moedas.

```sh
curl https://api.coindesk.com/v1/bpi/currentprice.json
```
**ExchangeRate-API**
- URL: https://open.er-api.com/v6/latest/USD
- Descrição: Fornece taxas de câmbio de várias moedas em relação ao dólar americano.

```sh
curl https://open.er-api.com/v6/latest/USD
```

**Open Movie Database (OMDb) API**
- URL: http://www.omdbapi.com/?s=Batman
- Descrição: Retorna informações sobre filmes, como títulos, anos de lançamento e mais detalhes. (Nota: A API requer uma chave de API gratuita, mas você pode encontrar endpoints de teste que não exigem autenticação)

```sh
curl http://www.omdbapi.com/?s=Batman
```

**Studio Ghibli API**
- URL: https://ghibliapi.herokuapp.com/films
- Descrição: Fornece informações sobre filmes do Studio Ghibli.

```sh
curl https://ghibliapi.vercel.app/films
```

**TVMaze API**
- URL: https://api.tvmaze.com/search/shows?q=girls
- Descrição: Retorna informações sobre programas de TV, como títulos, sinopses e horários de exibição.

```sh
curl https://api.tvmaze.com/search/shows?q=girls
```
