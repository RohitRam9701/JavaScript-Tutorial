# Loops

Loops are used to perform repetitive tasks in programming. For example, if you wanted to print something 20 times, you could do it manually, but what if you needed to print it 20,000 times? That's where loops come in handy.

There are 5 types of loops in JavaScript:

1. `for` loop
2. `for-in` loop
3. `for-of` loop
4. `while` loop
5. `do-while` loop

In this lesson, we'll learn about the first 3 types of loops.

# For Loops

The syntax for a for loop is as follows:

```js
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```

Statement 1 is executed once before the loop starts. Statement 2 is checked at the beginning of each iteration, and if it's true, the code block is executed. After the code block has been executed, statement 3 is executed, and then the condition is checked again. This process repeats until the condition is no longer true.

Here's an example of using a for loop to print numbers from 1 to 29:

```js
for (let i = 1; i <= 29; i++) {
  console.log(i);
}
```

This code will print the numbers from 1 to 29 to the console. As you can see, using a for loop makes it much easier to perform repetitive tasks like this.

## Summing Numbers with a for Loop

Here's an example of using a for loop to sum the first n numbers, where n is entered by the user:

```js
let n = prompt("Enter a number");
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("The sum of first " + n + " numbers is " + sum);
```

This code is used to calculate the sum of the first n numbers where `n` is provided by the user through a prompt. The code uses a for loop to iterate over the numbers from 1 to n and add them to a variable called `sum`.

The for loop starts by initializing a loop variable `i` to 1, and checking if it is less than or equal to the value of `n`. If the condition is true, the loop body is executed, which adds the value of `i` to the `sum` variable. The loop then increments the value of `i` by 1 and repeats the process until the condition becomes `false`.

Finally, the code prints out the result of the sum using `console.log()`, which concatenates strings and variables to create a message that displays the value of `n` and the sum of the first `n` numbers.

# For-In Loops

**`for-in` loop**: A for-in loop is a variant of the for loop that is used to iterate over the properties of an object.

- Iterates over the **keys** (property names) of an object.
- Useful for iterating through object properties.
- The syntax is as follows:

```js
for (let property in object) {
  // code block to be executed
}
```

- Here's an example of using a for-in loop to iterate over the properties of an object:

```javascript
let person = {
  name: "Harry",
  age: 30,
  gender: "male",
};

for (let x in person) {
  console.log(x + ": " + person[x]);
}
```

This code will print each property of the person object and its corresponding value to the console.

- Not recommended for arrays because it can also iterate over non-index properties (like custom added properties). For example:
  ```javascript
  const arr = [3, 5, 7];
  arr.foo = "hello"; // added property
  for (const key in arr) {
    console.log(key); // Logs "0", "1", "2", "foo"
  }
  console.log(arr); // output: both keys and values
  ```

# For-Of Loops

**`for-of` loop**: A for-of loop is another variant of the for loop that is used to iterate over iterable objects like arrays and strings.

- Iterates over the **values** of an iterable object (such as arrays, strings, maps, sets, etc.).
- Specifically designed for arrays and other iterable data structures.
- The syntax is as follows:

```javascript
for (let value of iterable) {
  // code block to be executed
}
```

- Example:
  ```javascript
  const cars = ["BMW", "Volvo", "Mini"];
  let text = "";
  for (const car of cars) {
    text += car;
  }
  // Result: "BMWVolvoMini"
  ```
- Here's an another example of using a for-of loop to iterate over the elements of an array:

```typescript
let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}
```

This code will print each element of the numbers array to the console.

- Ignores (avoids) non-index properties (like custom added properties) as it directly iterates over values. For example:

```javascript
const arr = [3, 5, 7];
arr.foo = "hello"; // added property
for (const value of arr) {
  console.log(value); // Logs "3", "5", "7" (no "hello" here!)
}
console.log(arr); // output: both keys and values
```

Note that we will be using for-in and for-of loops extensively when working with arrays, which we will cover later in this course.

# Conclusion

Loops are a fundamental programming concept used to perform repetitive tasks efficiently. JavaScript offers five types of loops: **for, for-in, for-of, while,** and **do-while**.

For loops are commonly used for iterating over a sequence of numbers or a list of items. For-in loops are used for iterating over the properties of an object, and for-of loops are used for iterating over iterable objects such as arrays and strings. Understanding how to use loops effectively is essential for writing efficient and readable code in JavaScript.

We will discuss while and do-while loops in our next tutorial.

[Next-Lecture](https://replit.com/@ramrohit9701/10whileloops)
