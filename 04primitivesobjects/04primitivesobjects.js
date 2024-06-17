// nn bb ss u - Primitives in Js
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3"); // output: 570n
/*
The number 570 appears to have an additional "n" after it, which typically indicates a JavaScript notation for BigInt values. This can occur when BigInt values are converted to strings with the "n" suffix to indicate they are BigInt values.
*/
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g;
console.log(a, b, c, d, e, f, g);
console.log(typeof c); // typeof is used to get the type of variable

// Non Primitive Data Type - Objects in Js
const item = {
  Harry: true,
  Shubh: false,
  Lovish: 67,
  Rohan: undefined,
};
console.log(item.Shubh); // prints false
//Or, console.log(item["Shubh"]); // prints false
// Objects in JavaScript are similar to dictionaries in Python,but do not get confused and say object as a dictionary.
//Objects can be used to create dictionaries and mappings of data such as student marks and item prices.
//They allow for easy lookup and manipulation of data using key-value pairs.

/*In JavaScript, non-primitive (also known as reference) data types include:

1. Object: This is a collection of properties, and a property is an association between a name (or key) and a value. The value can be a function, which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects.

   Example: */
let student = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(student.getFullName()); // Output: John Doe

// Define an object using object literal syntax
let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

// Accessing properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30

// Calling a method
person.greet(); // Output: Hello, my name is John

// Adding a new property
person.job = "Developer";
console.log(person.job); // Output: Developer
person["hobby"] = "reading";
console.log(person.hobby); // Output: reading

// Deleting a property
delete person.age;
console.log(person.age); // Output: undefined

/* 
2. Function: This is a callable object that executes a block of code. Since functions are objects, they have properties and can be manipulated and passed around like any other object. 

   Example: */

function addNumbers(a, b) {
  return a + b;
}
let result = addNumbers(3, 5);
console.log(addNumbers(5, 10)); // Output: 15
/*
3. Array: This is a special type of object that represents a list of items. In JavaScript, arrays can contain items of different data types (like integer, string, even objects or other arrays), they are dynamic and can change size over the course of a program, and they have some built-in methods that make them easy to work with.

   Example: */

let fruits = ["Apple", "Banana", "Cherry"]; //0, 1, 2
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry
/*
Remember that in JavaScript, strings are considered primitive data types, but they have many object-like properties and methods which can sometimes make them seem non-primitive. Other languages may consider strings as non-primitive data types.

Example: */

let strg = "Hello world!";

console.log(strg.toUpperCase()); // Output: HELLO WORLD!

// In Short

// Non-Primitive Types
let obj = { name: "John", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let func = function () {
  // Function
  return "Hello World";
};

/* 
1. Variable Exploration: 
Create variables of each primitive type and use `console.log` to print out their values and types.
*/
let num = 10; // Number
let str = "Hello World"; // String
let bool = true; // Boolean
let notDefined; // Undefined
let empty = null; // Null
let largeNum = 1234567890123456789012345678901234567890n; // BigInt
let sym = Symbol("sym"); // Symbol

console.log(num, typeof num);
console.log(str, typeof str);
console.log(bool, typeof bool);
console.log(notDefined, typeof notDefined);
console.log(empty, typeof empty);
console.log(largeNum, typeof largeNum);
console.log(sym, typeof sym);

/* 
2. Object Creation: 
Define an object representing a `Book` with properties like `title`, `author`, and `year`. Add a method to the object that prints a summary of the book.
*/
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  getSummary: function () {
    return `${this.title} by ${this.author}, published in ${this.year}.`;
  },
};

console.log(book.getSummary());

/* 
3. Function Practice: 
Write a function that takes two numbers and returns their average. Then, call this function with different sets of numbers and print the results.
*/
function average(num1, num2) {
  return (num1 + num2) / 2;
}

console.log(average(4, 6)); // Output: 5
console.log(average(20, 30)); // Output: 25

/* 
4. Array Manipulation: 
Create an array of five different fruits and write code to:
- Add a new fruit to the end.
- Remove the first fruit.
- Find the index of a specific fruit and replace it with another one.
*/
let Fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

Fruits.push("Fig"); // Add a new fruit to the end.
console.log(Fruits);// Output: ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig"]

Fruits.shift(); // Remove the first fruit.
console.log(Fruits); // Output: ["Banana", "Cherry", "Date", "Elderberry", "Fig"]

let cherryIndex = Fruits.indexOf("Cherry"); // Find the index of 'Cherry'
if (cherryIndex !== -1) {
  Fruits[cherryIndex] = "Grape"; // Replace 'Cherry' with 'Grape'
}
console.log(Fruits); // Output: ["Banana", "Grape", "Date", "Elderberry", "Fig"]
