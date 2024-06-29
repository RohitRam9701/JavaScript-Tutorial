console.log("\nnn bb ss u - Primitives in Js");
/* Primitive Data Types are the predefined data types (in-built data types) provided by JavaScript. */
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
console.log("\n", a, b, c, d, e, f, g);
console.log("\n", typeof c); // typeof is used to get the type of variable

console.log("\nNon Primitive Data Type - Objects in Js");
/* Non-Primitive Data Types are derived from primitive data types. So, they are also called reference or derived data types. 
Examples of non-primitive data types:
Object: Represents an entity with properties and methods (e.g., { name: 'John', age: 30 }).

Array: Represents a collection of similar elements (e.g., [1, 2, 3]).

Function: A callable object that performs a specific task (e.g., function greet() { ... }).

Map: Stores key-value pairs (e.g., new Map()).

Set: Represents a collection of unique values (e.g., new Set()).

WeakMap and WeakSet: Similar to Map and Set, but with weak references.
*/
const item = {
  Harry: true,
  Shubh: false,
  Lovish: 67,
  Rohan: undefined,
};
console.log("\n", item.Shubh); // prints false
//Or, console.log(item["Shubh"]); // prints false

// Objects in JavaScript are similar to dictionaries in Python,but do not get confused and say object as a dictionary.
//Objects can be used to create dictionaries and mappings of data such as student marks and item prices.
//They allow for easy lookup and manipulation of data using key-value pairs.

/*
1. Object: This is a collection of properties, and a property is an association between a name (or key) and a value. The value can be a function, which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects.
Simply, it represents an entity with properties (key-value pairs) and methods (functions associated with the object).

   Example: */
let student = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`; // this refers to the current object
  },
};
// this refers to the current execution context (usually an object) and allows access to its properties and methods.
console.log("\n", student.getFullName()); // Output: John Doe

// Define an object using object literal syntax
let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("\n", "Hello, my name is " + this.name); //or, console.log(`Hello, my name is ${this.name}.`);
  },
};

// Accessing properties
console.log("\n", person.name); // Output: John
console.log("\n", person.age); // Output: 30

// Calling a method
person.greet(); // Output: Hello, my name is John

// Adding a new property
person.job = "Developer";
console.log("\n", person.job); // Output: Developer
person["hobby"] = "reading";
console.log("\n", person.hobby); // Output: reading

// Deleting a property
delete person.age;
console.log("\n", person.age); // Output: undefined

/* 
2. Function: This is a callable object that executes a block of code. Since functions are objects, they have properties and can be manipulated and passed around like any other object. 

   Example: */

function addNumbers(a, b) {
  return a + b;
}
let result = addNumbers(3, 5);
console.log("\n", addNumbers(5, 10)); // Output: 15

const l = 5; // Declare a constant variable 'f' with value 5 (outer scope)
function m() {
  const l = 8; // Declare a new constant variable 'l' with value 8 (inner scope)
  return console.log(l); // Logs the inner 'l' (8) and implicitly returns undefined
}
console.log(m()); // Calls 'm()', logs 8 (from the function), and returns undefined but doesn’t explicitly return any value, resulting in the overall return value being undefined.
console.log(l); // Logs the outer 'l' (5)

const q = 5; // Declare a constant variable 'q' with value 5 (outer scope)
function n() {
  const q = 8; // Declare a new constant variable 'q' with value 8 (inner scope)
  return q; // Return the inner 'q' (8) directly
}
console.log(n()); // Calls 'n()', logs 8 (from the function), and returns 8
console.log(q); // Logs the outer 'q' (5)
console.log(n); // Logs [Function: m]


/*
3. Array: This is a special type of object that represents a list of items. In JavaScript, arrays can contain items of different data types (like integer, string, even objects or other arrays), they are dynamic and can change size over the course of a program, and they have some built-in methods that make them easy to work with.
Simply, it represents a collection of similar elements.
*/
// Example:

let fruits = ["Apple", "Banana", "Cherry"]; //0, 1, 2
console.log("\n", fruits[0]); // Output: Apple
console.log("\n", fruits[1]); // Output: Banana
console.log("\n", fruits[2]); // Output: Cherry

// Modifying an array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log("\n", doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log("\n", numbers.length); // Output: 5

console.log("\nUse Array.isArray(variable) to determine if a variable is an array.");
console.log("\nUse Array.from(new Set(array)) or a loop to filter out duplicates. This is useful when you want to remove duplicate values from an array.");

/*
Remember that in JavaScript, strings are considered primitive data types, but they have many object-like properties and methods which can sometimes make them seem non-primitive. Other languages may consider strings as non-primitive data types.
*/
// Example:

let strg = "Hello world!";
console.log("\n", strg.toUpperCase()); // Output: HELLO WORLD!

/* 4.Map: Stores key-value pairs. */
// Example:
const fruitPrices = new Map();
fruitPrices.set("apple", 1.5);
fruitPrices.set("banana", 0.8);
console.log("\n", fruitPrices.get("apple")); // Output: 1.5

/* 5.Set: Represents a collection of unique values. */
// Example:
const uniqueNumbers = new Set([1, 2, 3, 2, 4, 3]);
console.log("\n", uniqueNumbers); // Output: Set { 1, 2, 3, 4 }

/* 6.WeakMap and WeakSet: Similar to Map and Set, but with weak references (used for memory management). */
// Example(WeakMap):
const userMap = new WeakMap();
const user = { name: "Alice" };
userMap.set(user, "user data");
console.log("\n", userMap.get(user)); // Output: user data

// Example(WeakSet):
// Creating a WeakSet
const weakSet = new WeakSet();

// Creating objects
const obj1 = { name: "Object 1" };
const obj2 = { name: "Object 2" };

// Adding objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// Checking if objects are in the WeakSet
console.log("\n", weakSet.has(obj1)); // true
console.log("\n", weakSet.has(obj2)); // true

// Removing an object from the WeakSet
weakSet.delete(obj1);
console.log("\n", weakSet.has(obj1)); // false

// In Short

// Non-Primitive Types
let obj = { name: "John", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let func = function () {
  // Function
  return "Hello World";
};

// Practice Set
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

console.log("\n", num, typeof num);
console.log("\n", str, typeof str);
console.log("\n", bool, typeof bool);
console.log("\n", notDefined, typeof notDefined);
console.log("\n", empty, typeof empty);
console.log("\n", largeNum, typeof largeNum);
console.log("\n", sym, typeof sym);

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

console.log("\n", book.getSummary());

/* 
3. Function Practice: 
Write a function that takes two numbers and returns their average. Then, call this function with different sets of numbers and print the results.
*/
function average(num1, num2) {
  return (num1 + num2) / 2;
}

console.log("\n", average(4, 6)); // Output: 5
console.log("\n", average(20, 30)); // Output: 25

/* 
4. Array Manipulation: 
Create an array of five different fruits and write code to:
- Add a new fruit to the end.
- Remove the first fruit.
- Find the index of a specific fruit and replace it with another one.
*/
let fruitsArray = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

fruitsArray.push("Fig"); // Add a new fruit to the end.
console.log("\n", fruitsArray); // Output: ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig"]

fruitsArray.shift(); // Remove the first fruit.
console.log("\n", fruitsArray); // Output: ["Banana", "Cherry", "Date", "Elderberry", "Fig"]

let cherryIndex = fruitsArray.indexOf("Cherry"); // Find the index of 'Cherry'
if (cherryIndex !== -1) {
  fruitsArray[cherryIndex] = "Grape"; // Replace 'Cherry' with 'Grape'
}
console.log("\n", fruitsArray); // Output: ["Banana", "Grape", "Date", "Elderberry", "Fig"]

// Apna College
console.log(
  "\n",
  "https://drive.google.com/file/d/1utqZcGfnI2Yz-UEvH9hXnR-KLP6iJjcE/view?usp=sharing"
);

// 1
const product = {
  name: "Parker Jotter Standard CT Ball Pen",
  color: "Black",
  rating: "*****",
  reviews: 7002,
  deal: "Deal of the Day",
  price: 270,
  originalPrice: 285,
  discountPercentage: 5,
};
console.log("\n", product);

// 2
const profile = {
  username: "shradhakhapra",
  posts: 195,
  followers: 569000, // 'K' is often used to represent thousands
  following: 4,
  bio: {
    name: "Shradha Khapra",
    title: "Entrepreneur",
    affiliations: ["Apna College", "Ex-Microsoft", "DRDO"],
    quote: "To educate someone is the highest privilege",
  },
};
console.log("\n", profile);

// Let's explore some real-world scenarios where non-primitive data types (such as objects and arrays) play a crucial role:

// 1. Managing User Profiles:
//    - In a social media application, user profiles are represented as objects containing properties like name, age, profile picture, and followers count.

//    - Solution: Create an object for each user with relevant properties:
const user1 = {
  name: "Alice",
  age: 25,
  followers: 1000,
  profilePic: "profile.jpg",
};
console.log("\n", user1);

// 2. Shopping Cart:
//    - An e-commerce website uses an array to store items in the user's shopping cart.
//    - Each item can have properties like name, price, quantity, and availability.

//    - Solution: Create an array of objects representing each item in the cart:
const cart = [
  { name: "Shoes", price: 50, quantity: 2, available: true },
  { name: "T-shirt", price: 20, quantity: 3, available: true },
];
console.log("\n", cart);

// 3. Database Records:
//    - When interacting with databases, non-primitive data types (objects or classes) represent records.
//    - Each record corresponds to an entity (e.g., a customer, an order, or a product).

//    - Solution: Create objects representing each record with relevant properties:
class Customer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

const customer1 = new Customer(1, "John Doe", "john@example.com");
console.log("\n", customer1);

// 4. Graph Data Structures:
//    - Graphs (used in social networks, maps, etc.) are often implemented using objects (nodes) and arrays (edges).
//    - Nodes represent entities, and edges define relationships between them.

//    - Solution: Create objects representing nodes and arrays representing edges:

const graph = {
  Alice: ["Bob", "Carol"],
  Bob: ["David"],
  Carol: ["Eve"],
};
console.log("\n", graph);

// 5. Event Handling:
//    - In web development, event listeners are attached to HTML elements (represented as objects).
//    - These listeners respond to user interactions (e.g., clicks, form submissions).

//    - Solution: Create event listeners for each element and attach them to relevant actions:

// const button = document.getElementById("myButton");
// button.addEventListener("click", () => {
//   console.log("Button clicked!");
// });

// 6. Storing Configuration Settings:
//    - Application settings (e.g., theme preferences, language selection) can be stored in an object or a map.

//    - Solution: Create an object or a map to store configuration settings:
const settings = {
  theme: "dark",
  language: "en",
};
console.log("\n", settings);