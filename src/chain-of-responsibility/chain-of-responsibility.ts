/**
 * Chain of Responsibility Pattern
 * 
 * The Chain of Responsibility pattern allows an object to pass a request 
 * along a chain of handlers until one of them handles the request. This 
 * pattern decouples the sender of a request from its receivers, allowing 
 * multiple objects to handle the request without the sender needing to 
 * know which object will ultimately handle it.
 * 
 * Components:
 * - Handler Interface: Defines a method for handling requests and setting 
 *   the next handler.
 * - Concrete Handlers: Implement the handler interface and process requests.
 * - Client: Initiates the request and sets up the chain of handlers.
 */

interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
      this.nextHandler = handler;
      return handler;
  }

  public handle(request: string): string | null {
      if (this.nextHandler) {
          return this.nextHandler.handle(request);
      }
      return null;
  }
}

class ConcreteHandlerA extends AbstractHandler {
  public handle(request: string): string | null {
      if (request === 'A') {
          return `Handler A handled request: ${request}`;
      }
      return super.handle(request);
  }
}

class ConcreteHandlerB extends AbstractHandler {
  public handle(request: string): string | null {
      if (request === 'B') {
          return `Handler B handled request: ${request}`;
      }
      return super.handle(request);
  }
}

class ConcreteHandlerC extends AbstractHandler {
  public handle(request: string): string | null {
      if (request === 'C') {
          return `Handler C handled request: ${request}`;
      }
      return super.handle(request);
  }
}

export { Handler, ConcreteHandlerA, ConcreteHandlerB, ConcreteHandlerC };