import { ConcreteClassA, ConcreteClassB } from './templateMethod';

function main() {
    const concreteA = new ConcreteClassA();
    console.log("Executing ConcreteClassA:");
    concreteA.templateMethod();

    console.log("\nExecuting ConcreteClassB:");
    const concreteB = new ConcreteClassB();
    concreteB.templateMethod();
}

main();

/**
 * 
 * Output
 * 
 * Executing ConcreteClassA:
 * ConcreteClassA: Step One executed.
 * ConcreteClassA: Step Two executed.
 * Step Three: Common behavior executed.
 * 
 * Executing ConcreteClassB:
 * ConcreteClassB: Step One executed.
 * ConcreteClassB: Step Two executed.
 * Step Three: Common behavior executed.
 */