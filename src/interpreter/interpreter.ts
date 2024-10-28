/**
 * Interpreter Pattern
 * 
 * The Interpreter pattern provides a way to evaluate sentences in a language. 
 * This pattern is particularly useful for designing domain-specific languages 
 * (DSLs) or for interpreting expressions in a predefined language. The 
 * Interpreter pattern defines a grammar for the language and provides an 
 * interpreter that uses the grammar to interpret sentences in that language.
 * 
 * Components:
 * - Abstract Expression: Declares an interpret method.
 * - Terminal Expression: Implements the interpret method for terminal symbols.
 * - Non-Terminal Expression: Implements the interpret method for non-terminal symbols.
 * - Context: Contains information that is global to the interpreter.
 * - Client: Creates the abstract syntax tree and calls the interpret method.
 */

interface Expression {
  interpret(context: Context): boolean;
}

class TerminalExpression implements Expression {
  private data: string;

  constructor(data: string) {
      this.data = data;
  }

  public interpret(context: Context): boolean {
      return context.getData().includes(this.data);
  }
}

class AndExpression implements Expression {
  private expr1: Expression;
  private expr2: Expression;

  constructor(expr1: Expression, expr2: Expression) {
      this.expr1 = expr1;
      this.expr2 = expr2;
  }

  public interpret(context: Context): boolean {
      return this.expr1.interpret(context) && this.expr2.interpret(context);
  }
}

class OrExpression implements Expression {
  private expr1: Expression;
  private expr2: Expression;

  constructor(expr1: Expression, expr2: Expression) {
      this.expr1 = expr1;
      this.expr2 = expr2;
  }

  public interpret(context: Context): boolean {
      return this.expr1.interpret(context) || this.expr2.interpret(context);
  }
}

class Context {
  private data: string;

  constructor(data: string) {
      this.data = data;
  }

  public getData(): string {
      return this.data;
  }
}

export { Expression, TerminalExpression, AndExpression, OrExpression, Context };