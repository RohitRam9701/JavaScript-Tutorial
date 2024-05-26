// 77;
// "Harry bhai"
// !true
// try all of the above on the console(browser console, not replit console) directly, not on js file
// or you can use console.log() to print the value of the expression as follows:
console.log(77);
console.log("Harry bhai");
console.log(false);
console.log(!true);

console.log("Operators in Js");
// Arithmetic Operators 
let a = 10;
let b = 4;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a / b = ", a / b);
console.log("a * b = ", a * b);
console.log("a ** b = ", a ** b); // exponent operator
console.log("a % b = ", a % b);
console.log("++a = ", ++a); // output = ++a = a + 1 = 10 + 1 = 11, a is incremented from 10 to 11. The new value (11) is printed.
console.log("a++ = ", a++); // output = a++ = a = 11, here the current value of a is 11, but in the next line the value of a becomes a = a + 1 = 11 + 1 = 12
console.log("--a = ", --a); // output = --a = a - 1 = 12 - 1 = 11, a is decremented from 12 to 11, so the new value of a, 11, is printed.
console.log("a-- = ", a--); // output = a-- = a = 11, here the current value of a is 11, but in the next line the value of a becomes a = a - 1 = 11 - 1 = 10
console.log("a = ", a);  // output = a = 10, here the value of a is 10.
console.log("a-- = ", a--); // output = a-- = a = 10, here the current value of a is 10, but in the next line the value of a becomes a = a - 1 = 10 - 1 = 9
console.log("a is now = ", a);

// replit tricks:
// press alt and click on another the lines to get multiple cursors
// use `alt+up/down arrow` to move the line up/down when cursor blinking on the line
// use `alt+left/right arrow` to move the cursor left/right when cursor blinking on the line
// use `alt+shift+down arrow` to copy the line below the current line
// use `alt+shift+up arrow` to copy the line above the current line
// use `alt+shift+left/right arrow` to copy the word left/right when cursor blinking on the word
// To comment or uncomment out any code, press `ctrl+/`

// Assignment Operators
let assignment = 1;
assignment += 5; // same as assignment = assignment + 5
console.log("assignment is now = ", assignment); // output = assignment = 1 + 5 = 6
assignment -= 5; // same as assignment = assignment - 5
console.log("assignment is now = ", assignment); // output = assignment = 6 - 5 = 1
assignment *= 5; // same as assignment = assignment * 5
console.log("assignment is now = ", assignment); // output = assignment = 1 * 5 = 5
assignment /= 5; // same as assignment = assignment / 5
console.log("assignment is now = ", assignment); // output = assignment = 5 / 5 = 1
let c = 5;
c **= 5; // same as c = c ** 5
console.log("c is now = ", c);
c %= 3; // same as c = c % 5
console.log("c is now = ", c);

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 !== comp2);
console.log("comp1 > comp2 is ", comp1 > comp2);

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5);
console.log(x>y || x==5);
console.log(!false);
console.log(!true);

// Comments
// This is a single line comment
/* This is a sample multiline comment and a tutorial
from 
codewithharry */
