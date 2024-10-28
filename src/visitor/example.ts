import { ConcreteElementA, ConcreteElementB, ConcreteVisitor } from './visitor';

function main() {
    const elements: Array<ConcreteElementA | ConcreteElementB> = [
        new ConcreteElementA(),
        new ConcreteElementB(),
    ];

    const visitor = new ConcreteVisitor();

    for (const element of elements) {
        element.accept(visitor);
    }
}

main();

/**
 * 
 * Output
 * 
 * ConcreteElementA: Operation A
 * ConcreteElementB: Operation B
 */