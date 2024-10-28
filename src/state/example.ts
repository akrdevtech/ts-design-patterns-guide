import { Context, ConcreteStateA, ConcreteStateB } from './state';

function main() {
    const context = new Context(new ConcreteStateA());

    for (let i = 0; i < 5; i++) {
        context.request();
    }
}

main();

/**
 * 
 * Output
 * 
 * Context: Transition to ConcreteStateA
 * ConcreteStateA: Handling request.
 * Context: Transition to ConcreteStateB
 * ConcreteStateB: Handling request.
 * Context: Transition to ConcreteStateA
 * ConcreteStateA: Handling request.
 * Context: Transition to ConcreteStateB
 * ConcreteStateB: Handling request.
 * Context: Transition to ConcreteStateA
 */