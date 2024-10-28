/**
 * Template Method Pattern
 * 
 * The Template Method pattern defines the skeleton of an algorithm in a method, 
 * deferring some steps to subclasses. This allows subclasses to redefine certain 
 * steps of the algorithm without changing its structure. The pattern promotes 
 * code reuse and helps maintain a consistent algorithm structure across 
 * different implementations.
 * 
 * Components:
 * - Abstract Class: Defines the template method and abstract methods.
 * - Concrete Class: Implements the abstract methods to provide specific behavior.
 */

abstract class AbstractClass {
    // The template method defines the skeleton of an algorithm.
    public templateMethod(): void {
        this.stepOne();
        this.stepTwo();
        this.stepThree();
    }

    protected abstract stepOne(): void;
    protected abstract stepTwo(): void;

    protected stepThree(): void {
        console.log("Step Three: Common behavior executed.");
    }
}

class ConcreteClassA extends AbstractClass {
    protected stepOne(): void {
        console.log("ConcreteClassA: Step One executed.");
    }

    protected stepTwo(): void {
        console.log("ConcreteClassA: Step Two executed.");
    }
}

class ConcreteClassB extends AbstractClass {
    protected stepOne(): void {
        console.log("ConcreteClassB: Step One executed.");
    }

    protected stepTwo(): void {
        console.log("ConcreteClassB: Step Two executed.");
    }
}

export { AbstractClass, ConcreteClassA, ConcreteClassB };