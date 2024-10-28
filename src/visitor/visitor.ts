/**
 * Visitor Pattern
 * 
 * The Visitor pattern allows you to separate an algorithm from the object 
 * structure on which it operates. This enables adding new operations to 
 * existing object structures without modifying those structures. The pattern 
 * is particularly useful when you have a complex object structure and want 
 * to perform operations on these objects without changing their classes.
 * 
 * Components:
 * - Visitor Interface: Defines a visit method for each type of element.
 * - Concrete Visitor: Implements the Visitor interface.
 * - Element Interface: Defines an accept method for the visitor.
 * - Concrete Elements: Implement the Element interface.
 */

interface Visitor {
    visitConcreteElementA(element: ConcreteElementA): void;
    visitConcreteElementB(element: ConcreteElementB): void;
}

interface Element {
    accept(visitor: Visitor): void;
}

class ConcreteElementA implements Element {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteElementA(this);
    }

    public operationA(): string {
        return "ConcreteElementA: Operation A";
    }
}

class ConcreteElementB implements Element {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteElementB(this);
    }

    public operationB(): string {
        return "ConcreteElementB: Operation B";
    }
}

class ConcreteVisitor implements Visitor {
    public visitConcreteElementA(element: ConcreteElementA): void {
        console.log(element.operationA());
    }

    public visitConcreteElementB(element: ConcreteElementB): void {
        console.log(element.operationB());
    }
}

export { Visitor, Element, ConcreteElementA, ConcreteElementB, ConcreteVisitor };