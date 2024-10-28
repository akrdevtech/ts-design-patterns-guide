/**
 * Strategy Pattern
 * 
 * The Strategy pattern enables selecting an algorithm's behavior at runtime. 
 * It defines a family of algorithms, encapsulates each one, and makes them 
 * interchangeable. This pattern allows clients to choose which algorithm to 
 * use without altering the context that uses it.
 * 
 * Components:
 * - Strategy: An interface for the algorithms.
 * - ConcreteStrategy: Classes that implement the Strategy interface.
 * - Context: A class that uses a Strategy to perform functionality.
 */

interface Strategy {
    execute(a: number, b: number): number;
}

class ConcreteStrategyAdd implements Strategy {
    public execute(a: number, b: number): number {
        return a + b;
    }
}

class ConcreteStrategySubtract implements Strategy {
    public execute(a: number, b: number): number {
        return a - b;
    }
}

class ConcreteStrategyMultiply implements Strategy {
    public execute(a: number, b: number): number {
        return a * b;
    }
}

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    public executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}

export { Strategy, ConcreteStrategyAdd, ConcreteStrategySubtract, ConcreteStrategyMultiply, Context };