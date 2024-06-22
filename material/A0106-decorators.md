# Decorators

## Índice
- [O que é?](#o-que-é)
- [Exemplos](#exemplos)

### O que é?
Decorators no TypeScript são uma característica especial que permite adicionar metadados, modificar o comportamento ou adicionar funcionalidades a classes, métodos, propriedades e parâmetros. Eles são inspirados por práticas de programação orientada a aspectos (AOP) e são amplamente utilizados em frameworks como NestJS e Angular.

#### NestJS
No NestJS, os decorators são amplamente utilizados para definir e configurar diferentes aspectos de uma aplicação de forma declarativa e clara.
Eles são utilizados para controlar a injeção de dependências, definir rotas, lidar com requisições HTTP, gerenciar exceções e muito mais. Utilizar decorators ajuda a manter o código organizado, modular e fácil de entender.

### Exemplos

**@Module()**: Utilizado para definir um módulo: uma unidade organizacional que agrupa componentes relacionados, como controladores e provedores (serviços).

   ```typescript
   import { Module } from '@nestjs/common';
   import { AppController } from './app.controller';
   import { AppService } from './app.service';

   @Module({
     imports: [],
     controllers: [AppController],
     providers: [AppService],
   })
   export class AppModule {}
   ```

**@Controller()**: Utilizado para definir um controlador, que é responsável por lidar com as requisições HTTP.

   ```typescript
   import { Controller, Get } from '@nestjs/common';
   import { AppService } from './app.service';

   @Controller('app')
   export class AppController {
     constructor(private readonly appService: AppService) {}

     @Get()
     getHello(): string {
       return this.appService.getHello();
     }
   }
   ```

**@Get(), @Post(), @Put(), @Delete(), etc.**: Utilizados para definir os métodos HTTP que o controlador deve lidar. São aplicados a métodos dentro do controlador.

   ```typescript
   import { Controller, Get, Post, Body } from '@nestjs/common';

   @Controller('items')
   export class ItemsController {
     @Get()
     findAll(): string {
       return 'This action returns all items';
     }

     @Post()
     create(@Body() createItemDto: any): string {
       return 'This action adds a new item';
     }
   }
   ```

**@Injectable()**: Utilizado para marcar uma classe como injetável, permitindo que ela seja injetada como uma dependência em outras classes.


   ```typescript
   import { Injectable } from '@nestjs/common';

   @Injectable()
   export class AppService {
     getHello(): string {
       return 'Hello World!';
     }
   }
   ```

**@Inject()**: Utilizado para injetar dependências manualmente. É útil quando você precisa de controle mais explícito sobre a injeção de dependências.

   ```typescript
   import { Injectable, Inject } from '@nestjs/common';

   @Injectable()
   export class SomeService {
     constructor(@Inject('MY_CUSTOM_TOKEN') private readonly customService: CustomService) {}
   }
   ```

**@Param(), @Query(), @Body(), @Headers(), etc.**: Utilizados para extrair parâmetros, query strings, corpo da requisição, headers, etc., das requisições HTTP.

   ```typescript
   import { Controller, Get, Param, Query } from '@nestjs/common';

   @Controller('users')
   export class UsersController {
     @Get(':id')
     findOne(@Param('id') id: string): string {
       return `This action returns a user with id: ${id}`;
     }

     @Get()
     findAll(@Query('page') page: number): string {
       return `This action returns users on page: ${page}`;
     }
   }
   ```

**@Catch()**: Filtros de exceção são usados para lidar com exceções lançadas no código e personalizar a resposta HTTP.

   ```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

@Catch(HttpException)
export class SimpleHttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      statusCode: status,
      message: exception.message || 'Internal server error',
    });
  }
}
   ```


