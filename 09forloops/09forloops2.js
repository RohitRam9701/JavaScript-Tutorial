/*-------------------------------------For Loop-------------------------------------*/

// Iterating through an array of items in a shopping cart
const shoppingCart_ = ['item1', 'item2', 'item3', 'item4'];
for (let i = 0; i < shoppingCart_.length; i++) {
  console.log(`Item ${i + 1}: ${shoppingCart_[i]}`);
}
// .length is a property of arrays. It returns the number of elements (items) in an array. Like here it is 4.
// Output: Items in the shopping cart

// Generating a countdown timer for a rocket launch
for (let i = 10; i >= 0; i--) {
  console.log(i === 0 ? "Liftoff!" : i);
}
// Output: 10 to Liftoff!

// Creating a multiplication table
const number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
// Output: Multiplication table for the number 5

// Paginating through search results
const searchResults = ['result1', 'result2', 'result3', 'result4', 'result5', 'result6'];
const resultsPerPage = 2;
const totalPages = Math.ceil(searchResults.length / resultsPerPage);
for (let i = 0; i < totalPages; i++) {
  console.log(`Page ${i + 1}:`);
  for (let j = i * resultsPerPage; j < (i + 1) * resultsPerPage && j < searchResults.length; j++) {
    console.log(searchResults[j]);
  }
}
// Output: Paginated search results

// Animating a progress bar
const totalProgress = 100;
const step = 10;
for (let i = 0; i <= totalProgress; i += step) {
  console.log(`Progress: ${i}%`);
}
// Output: Progress from 0% to 100% in steps of 10%

// Calculating compound interest over years
const principal = 1000;
const rate = 0.05;
const years = 10;
let amount = principal;
for (let i = 1; i <= years; i++) {
  amount += amount * rate;
  console.log(`Year ${i}: $${amount.toFixed(2)}`);
}
// Output: Compound interest over 10 years

// Generating a Fibonacci sequence
const fibonacciLength = 10;
let fib = [0, 1];
for (let i = 2; i < fibonacciLength; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib);
// Output: First 10 Fibonacci numbers

// Implementing a retry mechanism with a limited number of attempts
const maxAttempts = 5;
let success = false;
for (let i = 1; i <= maxAttempts; i++) {
  // Simulate an operation that may fail
  const operationSuccessful = Math.random() > 0.5;
  if (operationSuccessful) {
    success = true;
    console.log(`Operation succeeded on attempt ${i}`);
    break;
  } else {
    console.log(`Attempt ${i} failed`);
  }
}
if (!success) {
  console.log('All attempts failed');
}
// Output: Success or failure messages for each attempt

// Creating a game loop for updating game state
const totalFrames = 60;
for (let i = 0; i < totalFrames; i++) {
  // Simulate game state update
  console.log(`Frame ${i + 1}: Game state updated`);
}
// Output: Game state updated for each frame

// Batch processing of data records
const records = ['record1', 'record2', 'record3', 'record4', 'record5'];
const batchSize = 2;
for (let i = 0; i < records.length; i += batchSize) {
  console.log(`Processing batch starting with record ${i + 1}`);
  for (let j = i; j < i + batchSize && j < records.length; j++) {
    console.log(records[j]);
  }
}
// Output: Batch processing of records

/*-------------------------------------------------For in Loops-------------------------------------*/

// 1. Displaying all properties of a user profile
const userProfile = {
  name: 'Alice',
  age: 28,
  email: 'alice@example.com',
  city: 'Wonderland'
};
for (let key in userProfile) {
  console.log(`${key}: ${userProfile[key]}`);
}
// Output: Displays all properties of the user profile

// 2. Iterating through form field values
const formData = {
  username: 'user123',
  password: 'pass123',
  email: 'user123@example.com'
};
for (let field in formData) {
  console.log(`${field}: ${formData[field]}`);
}
// Output: Displays all form field values

// 3. Debugging object properties
const debugObject = {
  id: 1,
  status: 'active',
  lastLogin: '2024-06-01',
  role: 'admin'
};
for (let prop in debugObject) {
  console.log(`Property ${prop} has value ${debugObject[prop]}`);
}
// Output: Debugging object properties

// 4. Implementing a property-based search function
const searchObject = {
  title: 'JavaScript Basics',
  author: 'Jane Doe',
  year: 2021,
  publisher: 'Tech Books'
};
const searchTerm = 'author';
for (let prop in searchObject) {
  if (prop === searchTerm) {
    console.log(`Found: ${prop} = ${searchObject[prop]}`);
  }
}
// Output: Search result based on property

// 5. Copying object properties
const source = {
  firstName: 'John',
  lastName: 'Doe',
  occupation: 'Developer'
};
const target = {};
for (let prop in source) {
  target[prop] = source[prop];
}
console.log(target);
// Output: Copied object properties to target object

// 6. Validating object structure
const requiredProperties = ['name', 'age', 'email'];
const user = {
  name: 'Bob',
  age: 30,
  email: 'bob@example.com'
};
for (let prop in user) {
  if (requiredProperties.includes(prop)) {
    console.log(`Property ${prop} is valid`);
  } else {
    console.log(`Property ${prop} is invalid`);
  }
}
// Output: Validation of object properties

// 7. Creating a dynamic form based on object properties
const formTemplate = {
  firstName: '',
  lastName: '',
  email: ''
};
for (let field in formTemplate) {
  console.log(`Creating input for ${field}`);
  // Example: document.createElement('input') for each field
}
// Output: Dynamic form fields creation

// 8. Generating a configuration panel from an options object
const configOptions = {
  theme: 'dark',
  notifications: true,
  autoSave: false
};
for (let option in configOptions) {
  console.log(`Setting ${option} to ${configOptions[option]}`);
}
// Output: Configuration panel settings

// 9. Implementing a simple key-value storage system
const keyValueStore = {
  apiKey: 'ABC123',
  userId: 'user789',
  sessionToken: 'xyz456'
};
for (let key in keyValueStore) {
  console.log(`Key: ${key}, Value: ${keyValueStore[key]}`);
}
// Output: Key-value storage system

// 10. Serializing object data for API requests
const apiData = {
  id: 101,
  name: 'Widget',
  price: 9.99,
  inStock: true
};
let serializedData = '';
for (let key in apiData) {
  serializedData += `${encodeURIComponent(key)}=${encodeURIComponent(apiData[key])}&`;
}
serializedData = serializedData.slice(0, -1); // Remove trailing '&'
console.log(serializedData);
// Output: Serialized data for API request

/*-------------------------------------------------For of Loops-------------------------------------*/

// 1. Processing items in a todo list
const todoList = ['Buy groceries', 'Pay bills', 'Attend meeting', 'Call mom'];
for (const item of todoList) {
  console.log(`Processing todo: ${item}`);
}
// Output: Processing each todo item

// 2. Iterating through characters in a string for text analysis
const text = 'Hello, World!';
for (const char of text) {
  console.log(`Character: ${char}`);
}
// Output: Each character in the string

// 3. Calculating the total price of items in a shopping cart
const shoppingCart = [
  { name: 'Apple', price: 1.2 },
  { name: 'Banana', price: 0.8 },
  { name: 'Cherry', price: 2.5 }
];
let totalPrice = 0;
for (const item of shoppingCart) {
  totalPrice += item.price;
}
console.log(`Total Price: $${totalPrice.toFixed(2)}`);
// Output: Total price of items in the cart

// 4. Rendering a list of comments on a blog post
const comments = [
  'Great post!',
  'Thanks for sharing.',
  'Very informative.',
  'I learned a lot.'
];
for (const comment of comments) {
  console.log(`Comment: ${comment}`);
}
// Output: Rendering each comment

// 5. Processing frames in a video stream
const frames = ['frame1', 'frame2', 'frame3', 'frame4'];
for (const frame of frames) {
  console.log(`Processing ${frame}`);
}
// Output: Processing each frame in the video stream

// 6. Iterating through a set of unique user IDs
const userIds = new Set(['user1', 'user2', 'user3', 'user4']);
for (const userId of userIds) {
  console.log(`User ID: ${userId}`);
}
// Output: Each unique user ID

// 7. Applying filters to an array of images
const images = ['image1.jpg', 'image2.png', 'image3.gif'];
for (const image of images) {
  console.log(`Applying filters to ${image}`);
}
// Output: Applying filters to each image

// 8. Processing each line in a CSV file
const csvData = [
  'Name,Age,Email',
  'Alice,28,alice@example.com',
  'Bob,35,bob@example.com',
  'Charlie,22,charlie@example.com'
];
for (const line of csvData) {
  const [name, age, email] = line.split(',');
  console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
}
// Output: Processing each line in the CSV file

// 9. Iterating through a collection of DOM elements
const elements = document.querySelectorAll('.class-name');
for (const element of elements) {
  console.log(`Element: ${element.tagName}`);
}
// Output: Each DOM element in the collection

// 10. Implementing a word count function for a text editor
const textContent = 'This is a simple text editor with word count functionality.';
const words = textContent.split(' ');
let wordCount = 0;
for (const word of words) {
  if (word !== '') {
    wordCount++;
  }
  // or simply,  wordCount++;  but word will be useless then
}
console.log(`Word Count: ${wordCount}`);
// Output: Total word count in the text