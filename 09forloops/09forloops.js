/*
for (let i = 0; i < 5; i++) {
console. log(i)
} output: 0 1 2 3 4
*/

for (let i = 0; i < 5; i++) {
  console.log(i+1)
  }  // output: 1 2 3 4 5
  
  // Program to add first n natural numbers 
  let sum = 0
  let n = prompt("Enter the value of n")
  n = Number.parseInt(n)
  for (let j = 0; j < n; j++) {
    sum += (j+ 1)
    // console.log((j+1), "+")
  }
  console.log("Sum of first " + n + " natural numbers is " + sum);
  // console.log(j)
  
  // Program to find the value of n! 
  let f = 1;
  let num = prompt("Enter the value of num")
  num = Number.parseInt(num)
  for (let i = 1; i <= num; i++) {
    f *= i
    // console.log((i+1), "*")
  }
  console.log("Factorial of " + num + " is " + f);
  
  // Object
  let obj = {
    harry: 90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
  }
  
  // For in loop
  for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a])
  }
  
  // For of loop
  for (let b of "Harry") {
    console.log(b)
  }
  
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