import { TerminalExpression, AndExpression, OrExpression, Context } from './interpreter';

function main() {
    // Create the context
    const context = new Context("John and Jane");

    // Create expressions
    const john = new TerminalExpression("John");
    const jane = new TerminalExpression("Jane");
    const andExpression = new AndExpression(john, jane);
    const orExpression = new OrExpression(john, jane);

    // Evaluate expressions
    console.log(`John and Jane: ${andExpression.interpret(context)}`); // true
    console.log(`John or Jane: ${orExpression.interpret(context)}`);   // true
}

main();

/**
 * 
 * Output
 * 
 * John and Jane: true
 * John
 */