/**
 * Mediator Pattern
 * 
 * The Mediator pattern defines an object that encapsulates how a set of objects 
 * interact. This pattern promotes loose coupling by preventing objects from 
 * referring to each other explicitly, allowing you to vary their interaction 
 * independently. It is particularly useful in scenarios where you have many 
 * components that need to communicate with each other.
 * 
 * Components:
 * - Mediator Interface: Defines an interface for communication between components.
 * - Concrete Mediator: Implements the mediator interface and coordinates communication.
 * - Colleague Classes: Components that communicate through the mediator.
 * - Client: Creates the mediator and colleagues, and initiates interaction.
 */

interface Mediator {
  notify(sender: Colleague, event: string): void;
}

class ConcreteMediator implements Mediator {
  private colleague1: Colleague1;
  private colleague2: Colleague2;

  constructor(colleague1: Colleague1, colleague2: Colleague2) {
      this.colleague1 = colleague1;
      this.colleague2 = colleague2;

      this.colleague1.setMediator(this);
      this.colleague2.setMediator(this);
  }

  public notify(sender: Colleague, event: string): void {
      if (event === "A") {
          console.log("Mediator reacts on A's event.");
          this.colleague2.doSomething();
      } else if (event === "B") {
          console.log("Mediator reacts on B's event.");
          this.colleague1.doSomething();
      }
  }
}

abstract class Colleague {
  protected mediator: Mediator;

  public setMediator(mediator: Mediator): void {
      this.mediator = mediator;
  }
}

class Colleague1 extends Colleague {
  public doSomething(): void {
      console.log("Colleague1 does something.");
      this.mediator.notify(this, "A");
  }
}

class Colleague2 extends Colleague {
  public doSomething(): void {
      console.log("Colleague2 does something.");
      this.mediator.notify(this, "B");
  }
}

export { Mediator, ConcreteMediator, Colleague, Colleague1, Colleague2 };