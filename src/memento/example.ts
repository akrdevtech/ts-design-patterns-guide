import { Originator, Caretaker } from './memento';

function main() {
    const caretaker = new Caretaker();
    const originator = new Originator();

    // Setting initial states
    originator.set("State1");
    caretaker.addMemento(originator.saveToMemento());

    originator.set("State2");
    caretaker.addMemento(originator.saveToMemento());

    originator.set("State3");
    console.log("Current State:", originator['state']); // Accessing private state for demonstration

    // Restoring to previous states
    originator.restoreFromMemento(caretaker.getMemento(1));  // Restore to State2
    originator.restoreFromMemento(caretaker.getMemento(0));  // Restore to State1
}

main();

/**
 * Output
 * 
 * Originator: Setting state to State1
 * Originator: Setting state to State2
 * Originator: Setting state to State3
 * Current State: State3
 * Originator: State after restoring from Memento: State2
 * Originator: State after restoring from Memento: State1
 */