// Checking Age for Driving 🚘 Eligiibility

// const prompt = require("prompt-sync")(); // Import the prompt-sync library using npm install prompt-sync in shell/terminal
let a = prompt("Hey whats you age?");
console.log(typeof a); // Output: string
a = Number.parseInt(a); // Converting the string to a number
console.log(typeof a); // Output: number

// If Statement
/* 
if(a>17){
     alert("This is a valid age and you can drive");
}  
*/
// If-Else Statement
/* 
if(a>17){
  alert("This is a valid age and you can drive");
}  
else {
  alert("This is an invalid age and you can't drive);   
}
*/

// If-Else-If statement
if (a < 0) {
  alert("This is an invalid age"); // for browser
  console.log("This is an invalid age"); // for console
} else if (a < 9) {
  alert("You are a kid and you cannot even think of driving");
  console.log("You are a kid and you cannot even think of driving");
} else if (a < 18 && a >= 9) {
  alert("You are a kid and you can think of driving after 18");
  console.log("You are a kid and you can think of driving after 18");
} else {
  alert("You can now drive as you are above 18");
  console.log("You can now drive as you are above 18");
}
console.log("Done");
console.log("You can", (a < 18 ? "not drive" : "drive"));

// Conditional statements in JavaScript allow you to execute different blocks of code 
// based on whether a condition is true or false.

//  ---------------------  if Statement  ---------------------

// The 'if' statement is the most basic form of conditional logic.
// Problem: Check if a student has passed an exam.

// Define the passing score
const passingScore = 60;
// Define the student's score
let studentScore = 75; 

// Check if the student's score is greater than or equal to the passing score
if (studentScore >= passingScore) {
  // If the condition is true, execute this code block
  console.log("Congratulations! You passed the exam."); 
}

//  ---------------------  if-else Statement  ---------------------

// The 'if-else' statement provides an alternative code block to execute 
// if the 'if' condition is false.
// Problem: Determine if a number is even or odd.

// Define a number
let number = 13;

// Check if the number is divisible by 2
if (number % 2 === 0) {
  // If true (even), execute this code block
  console.log(number + " is an even number.");
} else {
  // If false (odd), execute this code block
  console.log(number + " is an odd number.");
}

//  ---------------------  else-if Statement  ---------------------

// The 'else if' statement allows you to check multiple conditions sequentially.
// Problem: Assign a letter grade based on a numerical score.

// Define the student's score
let score = 85;

// Check the score against multiple grade boundaries
if (score >= 90) {
  console.log("You got an A!");
} else if (score >= 80) {
  console.log("You got a B!");
} else if (score >= 70) {
  console.log("You got a C.");
} else {
  console.log("You need to study harder."); 
}

//  ---------------------  Nested if-else Statements  ---------------------

// You can nest 'if-else' statements within each other for more complex logic.
// Problem: Determine the type of triangle based on side lengths.

// Define the lengths of the triangle's sides
let sideA = 5;
let sideB = 5;
let sideC = 5;

// Check for a valid triangle
if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
  // Triangle is valid - now check for type
  if (sideA === sideB && sideB === sideC) {
    console.log("It's an equilateral triangle."); 
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    console.log("It's an isosceles triangle."); 
  } else {
    console.log("It's a scalene triangle."); 
  }
} else {
  console.log("This is not a valid triangle.");
}
//  ---------------------  switch Statement  ---------------------

// HomeWork - Explore switch statement and write a basic program in the comments
// Switch Statement
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

let x = prompt("Enter the value of x");
const m = 12,
  n = 4;
switch (x) {
  case "1":
    console.log("Addition", m + n);
    break;
  case "2":
    console.log("Subtraction", m - n);
    break;
  case "3":
    console.log("Multiplication", m * n);
    break;
  case "4":
    console.log("Division", m / n);
    break;
  default:
    console.log("Remainder", m % n);
}
/*
let x = prompt("Enter the value of x");
x = Number.parseInt(x);
//Or, let x = Number(prompt("Enter the value of x")); // Number() function to convert the string returned by prompt into number so that my input works well with case 1, 2, ...
const m = 12, n = 4;
switch (x) {
  case 1:
    console.log("Addition", m+n);
    break;  
  case 2:
    console.log("Subtraction", m-n);
    break;  
  case 3:
    console.log("Multiplication", m*n);
    break;  
  case 4:
    console.log("Division", m/n);
    break;
  default:
    console.log("Remainder", m%n);
}*/



// Explanation and Real-Life Applications

// if: This is the fundamental building block. For example, in a weather app, you might use an if statement to check if the temperature is below freezing to display a "Wear a coat!" message.
const temperature = 25;
if (temperature < 0){
  console.log("Wear a coat!");
}

// if-else: This provides two distinct paths. Consider an online store: an if-else statement could check if an item is in stock and either add it to the cart or display an "Out of Stock" message and, in a weather app, you might use an if-else statement to display a "It's a beautiful day!" message if the temperature is above freezing.
const isInStock = true;
if (isInStock){
  console.log("Add to cart");
}
else {
  console.log("Out of stock");
}

if(temperature > 0) {
  console.log("It's a beautiful day!");
}
else {
  console.log("It's not a beautiful day!");
}

// else if: Useful for scenarios with multiple possibilities. In a game, you might use else if to award bronze, silver, or gold medals based on a player's score and, in a quiz app, you might use an else if statement to check if the user's answer is correct and display a "Correct!" message.

const marks = 85;
if (marks >= 90){
  console.log("You got an A!");
}
else if (marks >= 80){
  console.log("You got a B!");
}
else if (marks >= 70){
  console.log("You got a C.");
}
else {
  console.log("You need to study harder.");
}

// Nested if-else: Handles more intricate decision-making. In a loan approval system, nested conditions might check income, credit score, and loan amount to determine eligibility.
const income = 50000;
const creditScore = 700;
const loanAmount = 100000;
if (income > 50000){
  if (creditScore > 700){
    if (loanAmount < 100000){
      console.log("Loan approved!");
    }
    else {
      console.log("Loan amount is too high.");
    }
  }
  else {
    console.log("Credit score is not sufficient.");
  }
}

// switch: Switch statements are useful when you have a discrete set of possible values. In a weather app, you might use a switch statement to display the appropriate weather icon based on the current weather condition.
const weather = Number(prompt("Enter the weather condition"));
switch (weather) {
  case 1: console.log("It's sunny!");
    break;
  case 2: console.log("It's rainy!");
    break;
  case 3: console.log("It's snowy!");
    break;
  default: console.log("It's not sunny, rainy, or snowy.");
}

//  ---------------------  Prompt Alternative (if not working)  ---------------------

// Prompt is a built-in JavaScript function that allows you to display a dialog box with a message and an optional

// Method 1: Import the prompt-sync library (Node.js, useful for command-line input and works in both Replit and VS Code)
// npm install prompt-sync

// const prompt = require("prompt-sync")(); // Import the prompt-sync library using npm install prompt-sync in shell/terminal
// let a = prompt("Hey, what's your age? ");
// console.log(`You entered: ${a} years old.`);

// function getUserInput() {
//   const userInput = prompt("Enter something:");
//   return userInput;
// }

// const result = getUserInput();
// console.log(`You entered: ${result}`);

// Method 2: Use the readline-sync library (useful for command-line input, works in both Replit and VS Code)
// npm install readline-sync

// const readlineSync = require("readline-sync");
// let youAge = readlineSync.question("Hey, what's your age? ");
// console.log(`You entered: ${youAge} years old.`);

// Method 3: Use the readline module (Works with index.js in Replit, useful for command-line input, and works in VS Code.)
// npm install readline

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Hey, what's your age? ", (answer) => {
//     console.log(`You entered: ${answer} years old.`);
//     rl.close();
// });

// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question("Hey, what's your age? ", (answer2) => {
// // readline.question('What\'s your age? ', (answer2) => {
//     console.log(`You entered: ${answer2} years old.`);
//     readline.close();
// });

// --------------------------------------- Important Notes ----------------------------------

// Conditions: The expressions inside the parentheses of if, else if, or else must evaluate to true or false (booleans).

// Comparison Operators: Commonly used in conditions:

// == (equal to)

// != (not equal to)

// > (greater than)

// < (less than)

// >= (greater than or equal to)

// <= (less than or equal to)

// Logical Operators: Combine conditions:

// && (and) - Both conditions must be true.

// || (or) - At least one condition must be true.

// ! (not) - Inverts the truth value of a condition.