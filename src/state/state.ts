/**
 * State Pattern
 * 
 * The State pattern allows an object to change its behavior when its internal 
 * state changes. The object will appear to change its class. This pattern is 
 * useful for managing state transitions and encapsulating state-specific 
 * behavior in separate classes.
 * 
 * Components:
 * - Context: The class that has a state and can change its behavior.
 * - State: An interface for state-specific behavior.
 * - ConcreteState: Classes that implement the state-specific behavior.
 */

interface State {
    handle(context: Context): void;
}

class Context {
    private state: State;

    constructor(state: State) {
        this.transitionTo(state);
    }

    public transitionTo(state: State): void {
        console.log(`Context: Transition to ${(<any>state).constructor.name}`);
        this.state = state;
        this.state.setContext(this);
    }

    public request(): void {
        this.state.handle(this);
    }
}

class ConcreteStateA implements State {
    private context!: Context;

    public setContext(context: Context): void {
        this.context = context;
    }

    public handle(context: Context): void {
        console.log("ConcreteStateA: Handling request.");
        context.transitionTo(new ConcreteStateB());
    }
}

class ConcreteStateB implements State {
    private context!: Context;

    public setContext(context: Context): void {
        this.context = context;
    }

    public handle(context: Context): void {
        console.log("ConcreteStateB: Handling request.");
        context.transitionTo(new ConcreteStateA());
    }
}

export { Context, State, ConcreteStateA, ConcreteStateB };