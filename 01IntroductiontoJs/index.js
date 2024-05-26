console.log("Note: View Files from this Repl to Access the Source Code");
console.log("This program adds 1, 2 and 54");

function addThreeNumbers(a, b, c) {
   return a + b + c;
}
let c = addThreeNumbers(1, 2, 54);
console.log(c);
console.log("This repl contains code for the ultimate javascript course video no 2");

/*
 In JavaScript, semicolons are used to terminate statements. While JavaScript allows you to omit semicolons in some cases due to automatic semicolon insertion, it's a good practice to use them consistently to prevent unexpected behavior in your code. Here's where you should use semicolons in JavaScript:
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
1. After Statements: Terminate each statement with a semicolon. For example:
   let x = 5;
   console.log(x);

2. After Function Expressions: When defining a function expression, terminate it with a semicolon if it's not the end of a statement. For example:
   const myFunction = function() {
     // function body
   };

3. After return, break, and continue statements: Terminate these statements with a semicolon. For example:
   function myFunction() {
     return true;
   }

4. After Immediately Invoked Function Expressions (IIFE): Terminate IIFE with a semicolon to prevent potential issues with surrounding code. For example:
   (function() {
     // code
   })();

5. In for loops: Terminate the initialization, condition, and iteration parts of a for loop with semicolons. For example:
   for (let i = 0; i < 5; i++) {
     // loop body
   }

6. In switch statements: Terminate each case and default block with a semicolon. For example:
   switch (expression) {
     case x:
       // code
       break;
     default:
       // code
       break;
   }

7. In object literals: When defining object literals on separate lines, it's good practice to terminate each property with a semicolon. For example:
   const myObject = {
     property1: 'value1',
     property2: 'value2',
   };

Remember that while JavaScript allows for some flexibility in semicolon usage, it's best to adopt a consistent approach to enhance code readability and avoid unexpected errors.  
*/

/*
 Omitting semicolons in JavaScript is possible in certain cases due to automatic semicolon insertion, but it's essential to understand when it's safe to do so to prevent unintended consequences. Here are the cases where you can omit semicolons in JavaScript:

1. Between Statements: When each statement is on a separate line, JavaScript automatically inserts semicolons at the end of each line if it's a valid place to do so. For example:
   let x = 5
   console.log(x)
   In this case, JavaScript automatically inserts a semicolon after `let x = 5;` and `console.log(x);`.

2. After Blocks: You can omit semicolons after the closing curly brace of a block (e.g., if, for, while statements) because JavaScript knows that the block has ended. For example:
   if (condition) {
     // code block
   }
   JavaScript knows that the block inside the `if` statement has ended after the closing curly brace.

3. When the statement starts with `(`, `[`, or `` ` ``: If a statement starts with `(`, `[`, or `` ` ``, it's safe to omit semicolons. For example:
   let x = 5
   (function() {
     // code
   })()

4. After the `return`, `throw`, and `yield` keywords: You can omit semicolons after `return`, `throw`, and `yield` statements because JavaScript interprets these as the end of the statement. For example:
   function myFunction() {
     return true
   }

5. Before or after the `++` and `--` operators: You can omit semicolons before `++` and `--` operators if they are used as postfix operators. For example:
   let x = 5
   x++

While JavaScript allows for flexibility in these cases, it's important to note that relying on automatic semicolon insertion can sometimes lead to unexpected behavior or errors, especially when concatenating or minifying JavaScript code. Therefore, it's generally recommended to use semicolons consistently to enhance code clarity and prevent potential issues.  
*/
