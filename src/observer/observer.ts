/**
 * Observer Pattern
 * 
 * The Observer pattern defines a one-to-many dependency between objects 
 * so that when one object changes state, all its dependents are notified 
 * and updated automatically. This pattern is commonly used in event 
 * handling systems.
 * 
 * Components:
 * - Subject: The object that holds the state and notifies observers.
 * - Observer: The interface for objects that want to be notified of changes.
 * - ConcreteSubject: The implementation of the Subject that maintains state.
 * - ConcreteObserver: The implementation of the Observer that reacts to changes.
 */

interface Observer {
    update(state: string): void;
}

class Subject {
    private observers: Observer[] = [];
    private state: string = "";

    public attach(observer: Observer): void {
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this.state);
        }
    }

    public setState(state: string): void {
        console.log(`Subject: State has changed to ${state}`);
        this.state = state;
        this.notify();
    }
}

class ConcreteObserverA implements Observer {
    public update(state: string): void {
        console.log(`ConcreteObserverA: Reacted to state change: ${state}`);
    }
}

class ConcreteObserverB implements Observer {
    public update(state: string): void {
        console.log(`ConcreteObserverB: Reacted to state change: ${state}`);
    }
}

export { Subject, Observer, ConcreteObserverA, ConcreteObserverB };