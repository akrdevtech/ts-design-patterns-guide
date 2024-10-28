import { Context, ConcreteStrategyAdd, ConcreteStrategySubtract, ConcreteStrategyMultiply } from './strategy';

function main() {
    const context = new Context(new ConcreteStrategyAdd());

    console.log("Addition: " + context.executeStrategy(5, 3)); // Output: 8

    context.setStrategy(new ConcreteStrategySubtract());
    console.log("Subtraction: " + context.executeStrategy(5, 3)); // Output: 2

    context.setStrategy(new ConcreteStrategyMultiply());
    console.log("Multiplication: " + context.executeStrategy(5, 3)); // Output: 15
}

main();

/**
 * 
 * Output
 * 
 * Addition: 8
 * Subtraction: 2
 * Multiplication: 15
 */