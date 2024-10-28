import { Subject, ConcreteObserverA, ConcreteObserverB } from './observer';

function main() {
    const subject = new Subject();

    const observerA = new ConcreteObserverA();
    const observerB = new ConcreteObserverB();

    subject.attach(observerA);
    subject.attach(observerB);

    subject.setState("State1");
    subject.setState("State2");

    subject.detach(observerA);

    subject.setState("State3");
}

main();

/**
 * 
 * Output
 * 
 * Subject: State has changed to State1
 * ConcreteObserverA: Reacted to state change: State1
 * ConcreteObserverB: Reacted to state change: State1
 * Subject: State has changed to State2
 * ConcreteObserverA: Reacted to state change: State2
 * ConcreteObserverB: Reacted to state change: State2
 * Subject: State has changed to State3
 * ConcreteObserverB: Reacted to state change: State3
 */