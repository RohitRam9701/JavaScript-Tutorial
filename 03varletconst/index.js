console.log("JavaScript tutorial 3: var, let and const");
// var a = 45;
// var a = "p" // now a is not 45 but p, because var can be redeclared
//var is globally scoped and can be changed from anywhere
//let and const are block scoped and cannot be changed outside their block
// use alt to get multiple cursor on replit and change accordingly 
//var b = "p";
let b = "Harry";
// let b = 4; let can't be redeclared
b = 4  // let can be updated but not redeclared
let c = null;
console.log(c);
let d = undefined;
{
  let b = 'this'; // Using let inside the block
  console.log(b);
/* if I use var b = 'this'instead of let b = 'this' as below:
  var b = 'this'; 
  The code encounters a syntax error because the variable b is redeclared using var within 
  the same block scope after it has already been declared using let in the outer scope. In 
  JavaScript, redeclaring a variable using var after it has been declared using let within 
  the same scope leads to a syntax error due to the rules of variable declaration and scoping.
  */
}
console.log(b);

var x = "Ram";
{
  let x = "Shyam"; // Declares x within block scope using let
  console.log(x)
/*var x = "Shyam";
  console.log(x)  */ // Error: x redeclaration using var within the same block
  /*
  The use of let in the first code snippet declares x as a block-scoped variable, limiting its 
  accessibility to the block in which it is defined. This is why the subsequent var x = "Shyam"; 
  causes an error, as it attempts to redeclare x within the same block, violating the rules of 
  block scope.
  */
}
console.log(x)

var m = "Ram";
{
  var m = "Shyam"; // x redeclaration within the block, but in the same function-level scope
  console.log(m) // Prints Shyam without error
}
console.log(m)

const author = "Harry"
//let author = 5 // Throws an error because constant cannot be changed
// author = 5 Throws an error because constant cannot be changed
const PI = 3.14159;
// PI = 4; // This will throw an error, you cannot reassign a const variable

/*
Conclusions are:
var can be redeclared and updated, while let can only be updated but not redeclared, and const can neither be updated nor redeclared.
we have to use let and const instead of var.
we haver to use const most of the time.
we must think of scope of variables if we are going to use var.
*/
