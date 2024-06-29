// Create an array to store the items in the shopping cart
const cart = [
  {
    name: "Shoes",
    price: 50,
    quantity: 2,
    available: true
  },
  {
    name: "T-shirt",
    price: 20,
    quantity: 3,
    available: true
  },
  {
    name: "Laptop",
    price: 1000,
    quantity: 1,
    available: false
  }
];

// Add a new item to the cart
cart.push({
  name: "Hat",
  price: 15,
  quantity: 1,
  available: true
});

// Remove an item from the cart
cart.splice(1, 1); // Remove the second item (index 1)

// Update the quantity of an item
cart[0].quantity = 3;

// Calculate the total cost of the items in the cart
let totalCost = 0;
for (let item of cart) {
  totalCost += item.price * item.quantity;
}
console.log("Total cost:", totalCost);

// Filter the cart to show only available items
const availableItems = cart.filter(item => item.available);
console.log("Available items:", availableItems);

/* Object Property Access:
    - Problem: Retrieve the value of a specific property from an object.
    - Solution: Use dot notation or square brackets (object.property or object['property']).
*/
const user = { name: 'Alice', age: 30 };
const userName = user.name;
console.log(`User name: ${userName}`);

// Chapter: Strings

/*
1. String Template Literals:
    - Problem: Create a personalized greeting message.
    - Solution: Use template literals with backticks (`).
*/
const usernameGreeting = 'Alice';
const personalizedGreeting = `Hello, ${usernameGreeting}! Welcome back.`;
console.log(personalizedGreeting); // Expected: "Hello, Alice! Welcome back."

/*
2. Template Literals for Multi-line Strings:
    - Problem: Create a multi-line address string.
    - Solution: Use template literals with backticks.
*/
const address = `123 Main St
Apt 4B
Springfield, IL 62704`;
console.log(`Address:\n${address}`);

/*
3. Template Literals for Dynamic HTML:
    - Problem: Create a dynamic HTML snippet for a user profile.
    - Solution: Use template literals.
*/
const userProfileName = 'Charlie';
const userProfileHtml = `<div class="profile">
    <h1>${userProfileName}</h1>
    <p>Welcome to your profile page!</p>
</div>`;
console.log(userProfileHtml);

/*
4. String Methods (includes):
    - Problem: Check if a string contains a certain substring.
    - Solution: Use the includes method.
*/
const phrase = 'The quick brown fox jumps over the lazy dog';
const containsFox = phrase.includes('fox');
console.log(`Contains "fox": ${containsFox}`); // Expected: true

// Chapter: Arrays

/*
5. Array Methods (map):
    - Problem: Create a new array with the squares of each number in the original array.
    - Solution: Use the map method.
*/
const numArray = [1, 2, 3, 4, 5];
const squares = numArray.map(num => num * num);
console.log(`Squares: ${squares}`); // Expected: [1, 4, 9, 16, 25]

/*
6. Array Methods (filter):
    - Problem: Filter out all the odd numbers from an array.
    - Solution: Use the filter method.
*/
const mixedNumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);
console.log(`Even Numbers: ${evenNumbers}`); // Expected: [2, 4, 6]

/*
7. Array Methods (find):
    - Problem: Find the first number in the array that is greater than 3.
    - Solution: Use the find method.
*/
const foundNumber = mixedNumbers.find(num => num > 3);
console.log(`Found Number: ${foundNumber}`); // Expected: 4

/*
8. Array Methods (reduce):
    - Problem: Calculate the total of all numbers in an array.
    - Solution: Use the reduce method.
*/
const total = mixedNumbers.reduce((acc, num) => acc + num, 0);
console.log(`Total: ${total}`); // Expected: 21

/*
9. Array Destructuring:
    - Problem: Extract the first two elements from an array into variables.
    - Solution: Use array destructuring.
*/
const fruits = ['Apple', 'Banana', 'Cherry'];
const [firstFruit, secondFruit] = fruits;
console.log(`First Fruit: ${firstFruit}, Second Fruit: ${secondFruit}`); // Expected: "Apple, Banana"

// Chapter: Objects

/*
10. Destructuring Assignment:
    - Problem: Extract values from an object into variables.
    - Solution: Use destructuring assignment.
*/
const userInfo = { name: 'Alice', age: 30, location: 'Wonderland' };
const { name: userNameDestructured, age: userAgeDestructured, location: userLocationDestructured } = userInfo;
console.log(`Name: ${userNameDestructured}, Age: ${userAgeDestructured}, Location: ${userLocationDestructured}`); // Expected: "Name: Alice, Age: 30, Location: Wonderland"

/*
11. Object Property Shorthand:
    - Problem: Create an object using variables for keys and values.
    - Solution: Use property shorthand.
*/
const personName = 'Bob';
const personAge = 25;
const person = { personName, personAge };
console.log(`Person: ${JSON.stringify(person)}`); // Expected: { personName: 'Bob', personAge: 25 }

/*
12. Optional Chaining:
    - Problem: Safely access a deeply nested property in an object.
    - Solution: Use optional chaining.
*/
const userProfile = { name: 'Jane', contact: { email: 'jane@example.com' } };
const email = userProfile.contact?.email;
console.log(`Email: ${email}`); // Expected: "jane@example.com"

// Chapter: Functions

/*
13. Default Parameters:
    - Problem: Create a function that greets a user with a default name if no name is provided.
    - Solution: Use default parameters in the function definition.
*/
function greetUser(name = 'Guest') {
  return `Hello, ${name}!`;
}
console.log(greetUser()); // Expected: "Hello, Guest!"
console.log(greetUser('Alice')); // Expected: "Hello, Alice!"

/*
14. Rest Parameters:
    - Problem: Create a function that accepts any number of arguments and returns their sum.
    - Solution: Use rest parameters to gather all arguments into an array.
*/
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(`Sum: ${sum(1, 2, 3, 4, 5)}`); // Expected: 15

/*
15. Function Default Parameters:
    - Problem: Write a function that calculates the power of a number with a default exponent of 2.
    - Solution: Use default parameters in the function definition.
*/
function power(base, exponent = 2) {
  return Math.pow(base, exponent);
}
console.log(`Power: ${power(3)}`); // Expected: 9
console.log(`Power: ${power(3, 3)}`); // Expected: 27

/*
16. Arrow Functions:
    - Problem: Simplify a function that adds two numbers.
    - Solution: Use an arrow function.
*/
const add = (p, q) => p + q;
console.log(`Add: ${add(2, 3)}`); // Expected: 5
