/**
 * Iterator Pattern
 * 
 * The Iterator pattern provides a way to access the elements of a collection 
 * object sequentially without exposing its underlying representation. This 
 * pattern is particularly useful for collections that can have different 
 * internal structures, allowing clients to interact with them uniformly.
 * 
 * Components:
 * - Iterator Interface: Defines methods for traversing a collection.
 * - Concrete Iterator: Implements the iterator interface.
 * - Aggregate Interface: Defines a method for creating an iterator.
 * - Concrete Aggregate: Implements the aggregate interface and returns an iterator.
 * - Client: Uses the iterator to traverse the collection.
 */

interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

interface Aggregate<T> {
  createIterator(): Iterator<T>;
}

class ConcreteIterator<T> implements Iterator<T> {
  private collection: ConcreteAggregate<T>;
  private index: number = 0;

  constructor(collection: ConcreteAggregate<T>) {
      this.collection = collection;
  }

  public hasNext(): boolean {
      return this.index < this.collection.count();
  }

  public next(): T {
      return this.collection.get(this.index++);
  }
}

class ConcreteAggregate<T> implements Aggregate<T> {
  private items: T[] = [];

  public add(item: T): void {
      this.items.push(item);
  }

  public get(index: number): T {
      return this.items[index];
  }

  public count(): number {
      return this.items.length;
  }

  public createIterator(): Iterator<T> {
      return new ConcreteIterator<T>(this);
  }
}

export { Iterator, Aggregate, ConcreteIterator, ConcreteAggregate };