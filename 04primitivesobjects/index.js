// nn bb ss u - Primitives in Js
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3"); // output: 570n
/*
The number 570 appears to have an additional "n" after it, which typically indicates a JavaScript notation for BigInt values. This can occur when BigInt values are converted to strings with the "n" suffix to indicate they are BigInt values.
*/
let e = "Harry"
let f = Symbol("I am a nice symbol");
let g;
console.log(a, b, c , d, e, f, g)
console.log(typeof c) // typeof is used to get the type of variable

// Non Primitive Data Type - Objects in Js
const item = {
  "Harry": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
};
console.log(item["Shubh"]); // prints false
// Objects in JavaScript are similar to dictionaries in Python, do not get confused and say object as a dictionary.
//Objects can be used to create dictionaries and mappings of data such as student marks and item prices.
//They allow for easy lookup and manipulation of data using key-value pairs.

/*In JavaScript, non-primitive (also known as reference) data types include:

1. Object: This is a collection of properties, and a property is an association between a name (or key) and a value. The value can be a function, which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects.

   Example: */
let student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18,
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`; 
  }
};

console.log(student.getFullName()); // Output: John Doe


// Define an object using object literal syntax
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Accessing properties
console.log(person.name);  // Output: John
console.log(person.age);   // Output: 30

// Calling a method
person.greet();  // Output: Hello, my name is John

// Adding a new property
person.job = "Developer";
console.log(person.job);  // Output: Developer
person['hobby'] = "reading";
console.log(person.hobby);  // Output: reading

// Deleting a property
delete person.age;
console.log(person.age);  // Output: undefined

/* 
2. Function: This is a callable object that executes a block of code. Since functions are objects, they have properties and can be manipulated and passed around like any other object. 

   Example: */

   function addNumbers(a, b) {
     return a + b;
   }

   console.log(addNumbers(5, 10)); // Output: 15
/*
3. Array: This is a special type of object that represents a list of items. In JavaScript, arrays can contain items of different data types (like integer, string, even objects or other arrays), they are dynamic and can change size over the course of a program, and they have some built-in methods that make them easy to work with.

   Example: */

   let fruits = ['Apple', 'Banana', 'Cherry']; //0, 1, 2
   console.log(fruits[0]); // Output: Apple
   console.log(fruits[1]); // Output: Banana
   console.log(fruits[2]); // Output: Cherry
/*
Remember that in JavaScript, strings are considered primitive data types, but they have many object-like properties and methods which can sometimes make them seem non-primitive. Other languages may consider strings as non-primitive data types.

Example: */

let str = 'Hello world!';

console.log(str.toUpperCase()); // Output: HELLO WORLD!
