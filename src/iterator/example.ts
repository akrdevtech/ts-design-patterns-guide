import { ConcreteAggregate } from './iterator';

function main() {
    const aggregate = new ConcreteAggregate<string>();
    
    // Adding items to the collection
    aggregate.add("Item 1");
    aggregate.add("Item 2");
    aggregate.add("Item 3");
    
    // Creating an iterator for the collection
    const iterator = aggregate.createIterator();
    
    // Traversing the collection using the iterator
    while (iterator.hasNext()) {
        console.log(iterator.next());
    }
}

main();

/**
 * 
 * Output
 * 
 * Item 1
 * Item 2
 * Item 3
 */