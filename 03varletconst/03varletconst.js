console.log("JavaScript tutorial 3: var, let and const");

// var a = 45;
// var a = "p"; // now a is not 45 but "p", because var can be redeclared
// var is globally scoped or function scoped and can be changed from anywhere within its scope

// let and const are block scoped and cannot be changed outside their block
// Use Alt to get multiple cursors on Replit and change accordingly

// var b = "p";
let b = "Harry";
// let b = 4; // let can't be redeclared in the same scope
b = 4; // let can be updated but not redeclared in the same scope
let c = null;
console.log(c); // Expected output: null
let d = undefined;
console.log(d); // Expected output: undefined

{
  let b = "this"; // Using let inside the block
  console.log(b); // Expected output: this

  // If I use var b = 'this' after/instead of let b = 'this' as below:
  // var b = 'this'; 
  // The code encounters a syntax error because the variable b is redeclared using var within 
  // the same block scope after it has already been declared using let in the outer scope. In 
  // JavaScript, redeclaring a variable using var after it has been declared using let within 
  // the same scope leads to a syntax error due to the rules of variable declaration and scoping.
}
console.log(b); // Expected output: 4

var x = "Ram";
{
  let x = "Shyam"; // Declares x within block scope using let
  console.log(x); // Expected output: Shyam

  // What happens if I use var x = "Yam" or "Shyam" after let x = "Shyam" as below:
  // var x = "Yam"; // or, var x = "Shyam";
  // console.log(x);
  // Error: x redeclaration using var within the same block
  //
  // The use of let in the first code snippet declares x as a block-scoped variable, limiting its 
  // accessibility to the block in which it is defined. This is why the subsequent var x = "Yam" or, 
  // "Shyam" causes an error, as it attempts to redeclare x within the same block, violating the rules 
  // of block scope.
}
console.log(x); // Expected output: Ram

var m = "Ram";
{
  var m = "Shyam"; // m redeclaration within the block, but in the same function-level scope
  console.log(m); // Expected output: Shyam without error
}
console.log(m); // Expected output: Shyam

const author = "Harry";
// let author = 5; // Throws an error because constant cannot be changed
// author = 5; // Throws an error because constant cannot be changed
const PI = 3.14159;
// PI = 4; // This will throw an error, you cannot reassign a const variable

/*
Conclusions:
1. **var**:
   - Can be redeclared and updated within its scope (global or function).
   - Has function scope, which means it's accessible throughout the function it's declared in.
   - Use with caution to avoid scope-related issues and unintended redeclarations.

2. **let**:
   - Can be updated but not redeclared within the same scope.
   - Has block scope, meaning it's only accessible within the block it is declared in.
   - Preferred for variables that will change their value within their scope.

3. **const**:
   - Cannot be updated or redeclared.
   - Has block scope, similar to `let`.
   - Ideal for constants and variables that should not be reassigned.

4. **Best Practices**:
   - Prefer `const` for values that should remain constant.
   - Use `let` for variables that will be reassigned.
   - Avoid using `var` to prevent issues related to its broader scope and redeclaration.

5. **Scope Considerations**:
   - Understanding the scope of variables is crucial in JavaScript. `let` and `const` are limited to the block they are defined in, reducing the risk of unintended changes or conflicts.
   - `var` can lead to unexpected behavior due to its function-scoped nature, especially in larger functions or when used globally.

By following these guidelines, you can write more predictable and maintainable code.
*/
