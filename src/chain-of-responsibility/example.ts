import { ConcreteHandlerA, ConcreteHandlerB, ConcreteHandlerC } from './chain-of-responsibility';

function main() {
    const handlerA = new ConcreteHandlerA();
    const handlerB = new ConcreteHandlerB();
    const handlerC = new ConcreteHandlerC();

    // Setting up the chain: A -> B -> C
    handlerA.setNext(handlerB).setNext(handlerC);

    // Testing the chain with different requests
    const requests = ['A', 'B', 'C', 'D'];

    for (const request of requests) {
        const result = handlerA.handle(request);
        if (result) {
            console.log(result);
        } else {
            console.log(`No handler for request: ${request}`);
        }
    }
}

main();

/**
 * 
 * Output
 * 
 * Handler A handled request: A
 * Handler B handled request: B
 * Handler C handled request: C
 * No handler for request: D
 */