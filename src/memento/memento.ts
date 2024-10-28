/**
 * Memento Pattern
 * 
 * The Memento pattern is a behavioral design pattern that allows an object to 
 * capture its internal state and save it externally so that it can be restored 
 * later without violating encapsulation. This is particularly useful for 
 * implementing undo mechanisms or version control.
 * 
 * Components:
 * - Originator: The object whose state needs to be saved.
 * - Memento: The object that stores the state of the Originator.
 * - Caretaker: The object that manages the Memento, allowing saving and 
 *   restoring states.
 */

class Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getSavedState(): string {
        return this.state;
    }
}

class Originator {
    private state: string;

    constructor() {
        this.state = "";
    }

    public set(state: string): void {
        console.log(`Originator: Setting state to ${state}`);
        this.state = state;
    }

    public saveToMemento(): Memento {
        return new Memento(this.state);
    }

    public restoreFromMemento(memento: Memento): void {
        this.state = memento.getSavedState();
        console.log(`Originator: State after restoring from Memento: ${this.state}`);
    }
}

class Caretaker {
    private mementos: Memento[] = [];

    public addMemento(memento: Memento): void {
        this.mementos.push(memento);
    }

    public getMemento(index: number): Memento {
        return this.mementos[index];
    }
}

export { Originator, Caretaker, Memento };