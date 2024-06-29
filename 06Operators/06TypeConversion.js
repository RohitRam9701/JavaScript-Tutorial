/* Implicit Type Conversion (Coercion):
   - Implicit conversion in JavaScript occurs when a value of one data type is automatically converted to another data type
   without explicit instructions from the programmer.
*/

/* Example 1: JavaScript automatically converts a number to a string when they are concatenated using the + operator.
*/
let p = 10;
let q = '20';
let result = p + q; // JavaScript implicitly converts p to a string and concatenates
console.log(result); // "1020"

/* Example 2: 
    - Problem: Convert a value to a different type using type
    - Solution: Use operators (e.g., +, -, !, typeof).
*/
const coercionValue = '10'; // Example value
const coercedNumber = +coercionValue; // Convert to number
console.log(`Coerced number: ${coercedNumber}`); // Output: 10

/* Explicit Type Conversion (Type Casting):
   - Explicit conversion in JavaScript involves converting a value from one data type to another explicitly using JavaScript functions or constructors.
   - Example: Converting a string to a number using parseInt().
*/
// Number to String Conversion
let num = 123;
let strNum = String(num);
console.log(strNum); // "123"

// String to Number Conversion
let str = "456";
let numStr = parseInt(str);
console.log(numStr); // 456

// Boolean to String Conversion
let bool = true;
let strBool = String(bool);
console.log(strBool); // "true"

// String to Boolean Conversion
let str2 = "false";
let boolStr = Boolean(str2);
console.log(boolStr); // true (non-empty strings are truthy)

// Explicit Type Conversion Using Number Constructor
let value = "123.45";
let floatValue = Number(value);
console.log(floatValue); // 123.45

/* Truthy and Falsy Values:
   - In JavaScript, every value is inherently truthy or falsy when evaluated in a boolean context.
   - Falsy values: Values that evaluate to false in a boolean context (e.g., false, 0, '', null, undefined, NaN).
   - Truthy values: Values that evaluate to true in a boolean context (e.g., non-empty strings, non-zero numbers, objects, functions).
*/
// Falsy Values in JavaScript
console.log(Boolean(""));       // false
console.log(Boolean(0));        // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false
console.log(Boolean(false));    // false

// Truthy Values in JavaScript
console.log(Boolean("Hello"));  // true
console.log(Boolean(123));      // true
console.log(Boolean([]));       // true (an empty array is truthy)
console.log(Boolean({}));       // true (an empty object is truthy)
console.log(Boolean(function(){})); // true (a function is truthy)