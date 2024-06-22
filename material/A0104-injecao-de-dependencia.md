# Injeção de dependencia

## Índice
- [O que é?](#o-que-é)
- [Tipos de Injeção de Dependência](#tipos-de-injeção-de-dependência)
    - [Via Construtor](#via-construtor)
    - [Via Propriedade](#via-propriedade)
    - [Via Setter](#via-setter)
    - [Via Contêiner de Injeção de Dependência](#via-contêiner-de-injeção-de-dependência)
    - [Injeção de Dependência com NestJS](#injeção-de-dependência-com-nestjs)

### O que é?

Injeção de Dependência (DI) é um padrão de projeto usado para implementar o Princípio da Inversão de Dependência (DIP), um dos princípios SOLID de design de software. A DI é uma técnica que permite a separação das preocupações ao injetar dependências de um objeto a partir do exterior em vez de o próprio objeto criar suas dependências. Isso promove um design mais flexível, testável e de fácil manutenção.


### Tipos de Injeção de Dependência
Em um sistema onde a DI é aplicada, uma classe não cria suas próprias dependências, mas recebe essas dependências de um provedor externo (como um framework ou container). As dependências podem ser fornecidas de várias maneiras, incluindo via construtor, métodos setters ou interfaces.

A dependência é abstraída via uma interface, permitindo a flexibilidade de usar diferentes implementações.

#### Via Construtor
Neste exemplo, a dependência é passada via construtor, permitindo que o `GradeService` seja configurado com qualquer implementação de `EmailNotificationService`.


```typescript
// Interface para abstração
interface NotificationService {
  sendEmail(message: string): void;
}

// Classe de baixo nível
class EmailNotificationService implements NotificationService {
  sendEmail(message: string) {
    console.log(`Enviando Email com a mensagem: ${message}`);
  }
}

// Classe de alto nível
class GradeService {
  private notificationService: NotificationService;

  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  addGrade(studentName: string, grade: string) {
    this.notificationService.sendEmail(`Nota adicionada para  ${studentName}: ${grade}`);
    console.log(`Adicionada nota ${grade} para ${studentName}`);
  }
}

// Uso
const emailService = new EmailNotificationService();
const gradeService = new GradeService(emailService);
gradeService.addGrade('Maria Silva', 'A+');

```

**Explicação**:

- **Interface**: `NotificationService` define o contrato que qualquer serviço de notificação deve seguir.
- **Classe de baixo nível**: `EmailNotificationService` implementa a interface `NotificationService`.
- **Classe de alto nível**: `GradeService` recebe uma instância de `NotificationService` via construtor.
- **Uso**: Criamos uma instância de `EmailNotificationService` e a passamos para `GradeService`.

#### Via Propriedade
A dependência é injetada através de uma propriedade pública.

```typescript
// Interface para abstração
interface NotificationService {
  sendEmail(message: string): void;
}

// Classe de baixo nível
class EmailNotificationService implements NotificationService {
  sendEmail(message: string) {
    console.log(`Enviando Email com a mensagem: ${message}`);
  }
}

// Classe de alto nível
class GradeService {
  public notificationService: NotificationService;

  addGrade(studentName: string, grade: string) {
    this.notificationService.sendEmail(`Nota adicionada para  ${studentName}: ${grade}`);
    console.log(`Adicionada nota ${grade} para ${studentName}`);
  }
}

// Uso
const emailService = new EmailNotificationService();
const gradeService = new GradeService();
gradeService.notificationService = emailService;
gradeService.addGrade('Maria Silva', 'A+');
```

**Explicação**:

- **Propriedade Pública**: `GradeService` tem uma propriedade pública `notificationService` que pode ser configurada após a criação da instância.
- **Uso**: Instanciamos `EmailNotificationService` e a atribuímos à propriedade `notificationService` de `GradeService`.

#### Via Setter
A dependência é injetada através de um método setter.

```typescript
// Interface para abstração
interface NotificationService {
  sendEmail(message: string): void;
}

// Classe de baixo nível
class EmailNotificationService implements NotificationService {
  sendEmail(message: string) {
    console.log(`Enviando Email com a mensagem: ${message}`);
  }
}

// Classe de alto nível
class GradeService {
  private notificationService: NotificationService;

  setNotificationService(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  addGrade(studentName: string, grade: string) {
    this.notificationService.sendEmail(`Nota adicionada para  ${studentName}: ${grade}`);
    console.log(`Adicionada nota ${grade} para ${studentName}`);
  }
}

// Uso
const emailService = new EmailNotificationService();
const gradeService = new GradeService();
gradeService.setNotificationService(emailService);
gradeService.addGrade('Maria Silva', 'A+');
```

**Explicação**:

- **Método Setter**: `GradeService` tem um método `setNotificationService` para configurar a dependência.
- **Uso**: Instanciamos `EmailNotificationService` e a configuramos em `GradeService` usando o método setter.

#### Via Contêiner de Injeção de Dependência
Para um exemplo mais avançado, podemos usar um contêiner de injeção de dependência como `InversifyJS` para gerenciar as dependências.
Os Decorators `@injectable()` e `@inject()` são usados para configurar a injeção de dependência.
As classes e interfaces são vinculadas no contêiner que resolve as dependências automaticamente.

#### Injeção de Dependência com NestJS

No contexto do NestJS, a injeção de dependência é simplificada através do uso de decorators. 
O NestJS resolve automaticamente as dependências através dos decorators. Como `@Injectable()` que é usado para marcar classes para injeção de dependência e `@Module` que configura os provedores de dependências.
