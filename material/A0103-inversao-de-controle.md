# Inversão de Controle

## Índice
- [O que é?](#o-que-é)
- [Aplicando o DIP](#aplicando-o-dip)

### O que é?

Inversão de Controle (IoC) é um princípio de design usado na programação de software utilizada para aumentar a modularidade dos sistemas, criar extensibilidade e usufruir melhor da OOP (Programação Orientada a Objetos).

O termo inicial foi utilizado por Michael Mattson mas ficou popular em 2004 após citado por Robert C. Martin (Uncle Bob), quando apresentou os  cinco princípios **`SOLID`**:

- **S**ingle Responsibility Principle (Princípio da responsabilidade única)
- **O**pen-Closed Principle (Princípio aberto/fechado)
- **L**iskov Substitution Principle (Princípio da substituição de Liskov)
- **I**nterface Segregation Principle (Princípio da segregação da interface)
- **D**ependency Inversion Principle - **DIP** (Princípio da inversão da dependência)

No principio ele afirma que:

- Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
- Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

> classes ou módulos de alto nível são aquelas que encapsulam comportamentos complexos e interagem com abstrações, enquanto classes de baixo nível são responsáveis por implementações detalhadas e específicas.


**Código acoplado(sem DIP):**
```typescript
// Classe de baixo nível
class EmailNotificationService {
  sendEmail(message: string) {
    console.log(`Enviando Email com a mensagem: ${message}`);
  }
}

// Classe de alto nível
class GradeService {
  private emailService = new EmailNotificationService();

  addGrade(studentName: string, grade: string) {
    this.emailService.sendEmail(`Nota adicionada para  ${studentName}: ${grade}`);
    console.log(`Adicionada nota ${grade} para ${studentName}`);
  }
}

```

O problema desse código é que ele viola o princípio da Inversão de Dependência (DIP) e o princípio de Inversão de Controle (IoC). Vamos detalhar os problemas específicos:

### Problemas:

**Acoplamento Forte**:

   - A classe `GradeService` depende diretamente da implementação concreta `EmailNotificationService`. Isso significa que qualquer mudança na implementação de `EmailNotificationService` pode impactar `GradeService`.
   - Isso também dificulta a substituição de `EmailNotificationService` por outra implementação (por exemplo, `SMSNotificationService`) sem modificar `GradeService`.


**Dificuldade em Testar**:

   - Como `GradeService` cria uma instância de `EmailNotificationService` diretamente, é difícil fazer testes unitários em `GradeService` sem enviar e-mails de verdade.
   - Para testar `GradeService`, você teria que usar a implementação concreta de `EmailNotificationService`, o que pode não ser desejável em um ambiente de teste.

**Falta de Flexibilidade**:

   - O código é menos flexível e menos extensível. Se você quiser adicionar outro tipo de serviço de notificação (por exemplo, SMS ou Push Notification), terá que modificar `GradeService` para acomodar essas mudanças.

### Aplicando o DIP
Uma das formas de se aplicar DIP é criando uma interface interface `NotificationService` e injetando a dependência através de um construtor. Vamos reescrever o código:

```typescript
// Interface (abstração)
interface NotificationService {
  sendNotification(message: string): void;
}

// Classe de baixo nível
class EmailNotificationService implements NotificationService {
  sendNotification(message: string) {
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
    this.notificationService.sendNotification(`Nota adicionada para  ${studentName}: ${grade}`);
    console.log(`Adicionada nota ${grade} para ${studentName}`);
  }
}

// Uso
const notificationService = new EmailNotificationService();
const gradeService = new GradeService(notificationService);
gradeService.addGrade('Maria Silva', 'A+');
```

### Benefícios

**Desacoplamento**:`GradeService` depende de uma abstração (`NotificationService`) em vez de uma implementação concreta. Isso reduz o acoplamento entre as classes. Facilitando a substituição da implementação do serviço de notificação sem modificar `GradeService`.


**Facilidade de Teste**: Você pode facilmente criar uma implementação mock de `NotificationService` para testar `GradeService` sem enviar e-mails de verdade. Por exemplo, você pode criar uma classe `MockNotificationService` para usar em seus testes unitários.


**Flexibilidade e Extensibilidade**: Adicionar novos tipos de serviços de notificação (como SMS ou Push Notification) é simples. Basta criar novas implementações de `NotificationService` e injetá-las em `GradeService` quando necessário.


**Princípio da Inversão de Controle (IoC)**:

   - A responsabilidade de fornecer a dependência (`NotificationService`) é movida para fora da classe `GradeService`. Isso pode ser feito manualmente ou através de um framework de injeção de dependência, como o NestJS.

> Essa é uma das formas de aplicação do Princípio da inversão da dependência.
 Existem várias formas de aplicar o DIP, com abordagens como Decorators Customizados, Factory Providers e Value Providers. Mesmo assim, a **`Injeção de Dependência`** é geralmente a mais recomendada devido à sua simplicidade, clareza e suporte robusto em muitos frameworks modernos como NestJS.

---

### Links

- [Os princípios SOLID da Programação Orientada a Objetos explicados em bom português](https://www.freecodecamp.org/portuguese/news/os-principios-solid-da-programacao-orientada-a-objetos-explicados-em-bom-portugues/)
- [Video: Principio da inversão de dependência - principios do SOLID](https://www.youtube.com/watch?v=iUzfr4CWEYA&ab_channel=VamosCodar)