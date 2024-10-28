import { ConcreteMediator, Colleague1, Colleague2 } from './mediator';

function main() {
    const colleague1 = new Colleague1();
    const colleague2 = new Colleague2();
    
    const mediator = new ConcreteMediator(colleague1, colleague2);

    // Trigger events
    colleague1.doSomething();
    colleague2.doSomething();
}

main();

/**
 * 
 * Output
 * 
 * Colleague1 does something.
 * Mediator reacts on A's event.
 * Colleague2 does something.
 * Mediator reacts on B's event.
 */