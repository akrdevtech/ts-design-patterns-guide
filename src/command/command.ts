/**
 * Command Pattern
 * 
 * The Command pattern encapsulates a request as an object, allowing you to 
 * parameterize clients with different requests, queue or log requests, and 
 * support undoable operations. This pattern decouples the sender of a 
 * request from its receiver, allowing for more flexible and extensible code.
 * 
 * Components:
 * - Command Interface: Defines an interface for executing an operation.
 * - Concrete Command: Implements the command interface and binds a receiver.
 * - Receiver: The object that knows how to perform the operations.
 * - Invoker: The object that invokes the command to execute a request.
 * - Client: Creates a concrete command and sets its receiver.
 */

interface Command {
  execute(): void;
}

class Light {
  public turnOn(): void {
      console.log("The light is on.");
  }

  public turnOff(): void {
      console.log("The light is off.");
  }
}

class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
      this.light = light;
  }

  public execute(): void {
      this.light.turnOn();
  }
}

class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
      this.light = light;
  }

  public execute(): void {
      this.light.turnOff();
  }
}

class RemoteControl {
  private command: Command | null = null;

  public setCommand(command: Command): void {
      this.command = command;
  }

  public pressButton(): void {
      if (this.command) {
          this.command.execute();
      } else {
          console.log("No command set.");
      }
  }
}

export { Command, Light, LightOnCommand, LightOffCommand, RemoteControl };