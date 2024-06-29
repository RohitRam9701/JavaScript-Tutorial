/*
for (initialization; condition; afterthought) {
  // Code to execute
}
*/
/*
for (let i = 0; i < 5; i++) {
console. log(i)
} output: 0 1 2 3 4
*/

for (let i = 0; i < 5; i++) {
  console.log(i + 1);
} // output: 1 2 3 4 5

// Program to add first n natural numbers
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for (let j = 0; j < n; j++) {
  sum += j + 1;
  // console.log((j+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum);
// console.log(j)

// Program to find the value of n!
let f = 1;
let num = prompt("Enter the value of num");
num = Number.parseInt(num);
for (let i = 1; i <= num; i++) {
  f *= i;
  // console.log((i+1), "*")
}
console.log("Factorial of " + num + " is " + f);

// Counting selected options in a scrolling list
function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

// Iterating Over an Array
let fruits = ["apple", "banana", "mango", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Music Playlist: Imagine you have a music playlist with several songs. You want to play each song one after the other until there are no more songs left.     

// Initialize an array of songs
const playlist = ["Song A", "Song B", "Song C", "Song D"];

// Loop through the playlist and play each song
for (let i = 0; i < playlist.length; i++) {
  console.log(`Now playing: ${playlist[i]}`);
}

// - This loop iterates through the `playlist` array and prints each song's name.

// Object
let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23,
};

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}

// keys in a dictionary or properties in a class
const person = {
  name: "Alice",
  age: 30,
  occupation: "Engineer"
};
// Looping Through Object Properties
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// or,
// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

// For of loop
for (let b of "Harry") {
  console.log(b);
}

// to iterate over characters in a string
const message = "Hello, world!";
for (const char of message) {
  console.log(char);
}

/* 
Emptying a Suitcase: When you return from a journey, you need to unpack your suitcase. You want to remove each item from the suitcase and place it in its designated location.
*/

// Assume you have an array of items in your suitcase
const suitcase = ["Clothes", "Toiletries", "Books", "Snacks"];

// Loop through the suitcase and move each item to its designated place
for (const item of suitcase) {
  const destination = designatedPlace(item);
  console.log(`Move ${item} to ${destination}`);
}

// Function to determine the designated place for an item
function designatedPlace(item) {
  // Logic to determine the place based on the item type
  // (e.g., clothes go in the wardrobe, toiletries in the bathroom, etc.)
  // You can customize this function as needed.
  // For illustration purposes, let's assume a simple mapping.
  switch (item) {
    case "Clothes":
      return "Wardrobe";
    case "Toiletries":
      return "Bathroom";
    case "Books":
      return "Bookshelf";
    case "Snacks":
      return "Kitchen";
    default:
      return "Unknown";
  }
}

   // - This loop iterates through the `suitcase` array and moves each item to its designated place.

// Array
const arr = [3, 5, 7];
arr.foo = "hello"; // added property
// for-in loop
for (const key in arr) {
  console.log(key); // Logs "0", "1", "2", "foo"
}
// for-of loop
for (const value of arr) {
  console.log(value); // Logs "3", "5", "7" (no "hello" here!)
}
console.log(arr); // output: both keys and values