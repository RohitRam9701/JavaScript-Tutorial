// Demonstration of JavaScript operators

/* 
Unary Operator:++,--,!
A unary expression consists of a single operand and no operators. Examples of unary expressions are ++x (pre-increment), -x (negation), 
and !x (logical negation).

Binary Operator:
                  Arithmetic:+, -, *, /, % 
                  Relational:==,!=,>,<,<=,>=
                  Logical :&&,||,!
                  Bitwise:&,|,^,<<,>>
                  Assignment:=,+=,-=,*=,/=,%=,>>=,<<=,&=,^=,|=
Ternary Operator: Ternary or Conditional Operator(?:): This operator can be used to perform type conversion based on a condition. It has the form 
                 condition ? value1 : value2. Depending on the condition, it returns either value1 or value2, performing any necessary type 
                 conversions.
*/

// Console output for direct values
console.log(77); // Prints 77
console.log("Harry bhai"); // Prints "Harry bhai"
console.log(false); // Prints false
console.log(!true); // Prints false because ! (NOT) operator inverts true to false

console.log("Operators in JavaScript");

/*------------------------------------------ Arithmetic Operators -------------------------------------------*/
let a = 10;
let b = 4;
console.log("a + b = ", a + b); // Addition: 10 + 4 = 14
console.log("a - b = ", a - b); // Subtraction: 10 - 4 = 6
console.log("a / b = ", a / b); // Division: 10 / 4 = 2.5
console.log("a * b = ", a * b); // Multiplication: 10 * 4 = 40
console.log("a ** b = ", a ** b); // Exponentiation: 10 ** 4 = 10000
console.log("a % b = ", a % b); // Modulus: 10 % 4 = 2 (remainder of division)
console.log("++a = ", ++a); // Increment before use: a = a + 1 = 11, prints 11
console.log("a++ = ", a++); // Increment after use: prints 11, then a = a + 1 = 12
console.log("--a = ", --a); // Decrement before use: a = a - 1 = 11, prints 11
console.log("a-- = ", a--); // Decrement after use: prints 11, then a = a - 1 = 10
console.log("a = ", a); // Final value of a: 10

// Example 1: Calculate the total cost of items in a shopping cart. Given the price of each item and the quantity, find the total cost.
const itemPrices = [10, 15, 20]; // Example prices
const quantities = [2, 3, 1]; // Example quantities
const totalCost = itemPrices.reduce((acc, price, index) => acc + price * quantities[index], 0);
console.log(`Total cost: $${totalCost}`); // Output: Total cost: $85

// Example 2: Precedence and Parentheses: Evaluate the expression: 2 * (3 + 4).
const result = 2 * (3 + 4);
console.log(`Result: ${result}`); // Expected: 14

// Example 3: Order of Evaluation: Evaluate the expression: 5 + 3 * 2. Follow the order of operations (PEMDAS/BODMAS).
const expressionResult = 5 + 3 * 2;
console.log(`Result: ${expressionResult}`); // Expected: 11

// Example 4: Increment and Decrement Operators: Update a user’s score by 1 after each correct answer.
let score = 0;
score++;
console.log(`Score: ${score}`); // Expected: 1

// Example 5: Using Modulus Operator for Even/Odd Check
const numberToCheck = 27;
const evenOrOdd = numberToCheck % 2 === 0 ? 'Even' : 'Odd';
console.log(`The number is ${evenOrOdd}`); // Expected: "The number is Odd"

/*------------------------------------------------ Assignment Operators --------------------------------------*/

let assignment = 1;
assignment += 5; // Add and assign: assignment = 1 + 5 = 6
console.log("assignment is now = ", assignment);
assignment -= 5; // Subtract and assign: assignment = 6 - 5 = 1
console.log("assignment is now = ", assignment);
assignment *= 5; // Multiply and assign: assignment = 1 * 5 = 5
console.log("assignment is now = ", assignment);
assignment /= 5; // Divide and assign: assignment = 5 / 5 = 1
console.log("assignment is now = ", assignment);
let c = 5;
c **= 5; // Exponentiation and assign: c = 5 ** 5 = 3125
console.log("c is now = ", c);
c %= 3; // Modulus and assign: c = 3125 % 3 = 2
console.log("c is now = ", c);

/* Example 1:
    - Problem: Update user score based on quiz performance.
    - Solution: Use the += assignment operator (userScore += quizScore).
*/
let userScore = 0; // Initial score of the user
let quizScore = 80; // Score obtained in the quiz
userScore += quizScore; // Update user score after quiz completion
console.log(`User Score: ${userScore}`);

/* Example 2:
    - Problem: Adjust inventory count after selling a specific quantity of a product.
    - Solution: Use the -= assignment operator (inventory -= soldQuantity).
*/
let inventoryCount = 50; // Initial count of the product in inventory
let soldQuantity = 10; // Quantity of product sold
inventoryCount -= soldQuantity; // Update inventory count after sale
console.log(`Inventory Count: ${inventoryCount}`);

/* Example 3:
    - Problem: Calculate the discounted price after applying a percentage discount.
    - Solution: Use the *= assignment operator (price *= (1 - discountPercentage)).
*/
let originalPrice = 100; // Original price of a product
let discountPercentage = 20; // Percentage discount
originalPrice *= (1 - discountPercentage / 100); // Calculate discounted price
console.log(`Discounted Price: $${originalPrice}`);

/* Example 4:
    - Problem: Halve the number of items after a clearance sale.
    - Solution: Use the /= assignment operator (items /= 2).
*/
let items = 200; // Initial number of items
items /= 2; // Halve the number of items
console.log(`Remaining Items: ${items}`);

/* Example 5:
    - Problem: Calculate the remainder of apples after distributing them among students.
    - Solution: Use the %= assignment operator (apples %= students).
*/
let apples = 35; // Total number of apples
let students = 6; // Number of students
apples %= students; // Calculate the remainder of apples
console.log(`Remaining Apples: ${apples}`);

/* Example 6:
    - Problem: Increase the buffer size exponentially by a factor of 4.
    - Solution: Use the **= assignment operator (bufferSize **= 4).
*/
let bufferSize = 2; // Initial buffer size
bufferSize **= 4; // Increase buffer size exponentially by a factor of 4
console.log(`Increased Buffer Size: ${bufferSize}`);

/* Example 7:
    - Problem: Perform a left bitwise shift to multiply by 4.
    - Solution: Use the <<= assignment operator (value <<= 2).
*/
let value = 5; // Initial value
value <<= 2; // Left shift by 2 positions (multiply by 4)
console.log(`Value after left shift: ${value}`);

/* Example 8:
    - Problem: Perform a right bitwise shift to divide by 2.
    - Solution: Use the >>= assignment operator (value >>= 1).
*/
value = 8; // Resetting value
value >>= 1; // Right shift by 1 position (divide by 2)
console.log(`Value after right shift: ${value}`);

/* Example 9:
    - Problem: Perform an unsigned right bitwise shift to handle large integers.
    - Solution: Use the >>>= assignment operator (largeValue >>>= 2).
*/
let largeValue = -32; // Initial large value
largeValue >>>= 2; // Unsigned right shift by 2 positions
console.log(`Value after unsigned right shift: ${largeValue}`);

/*----------------------------------------- Comparison (Relational) Operators --------------------------------*/

let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2); // Loose equality: 6 == 7 is false
console.log("comp1 != comp2 is ", comp1 != comp2); // Loose inequality: 6 != 7 is true
console.log("comp1 === comp2 is ", comp1 === comp2); // Strict equality: 6 === 7 is false
console.log("comp1 !== comp2 is ", comp1 !== comp2); // Strict inequality: 6 !== 7 is true
console.log("comp1 > comp2 is ", comp1 > comp2); // Greater than: 6 > 7 is false
console.log("comp1 < comp2 is ", comp1 < comp2); // Less than: 6 < 7 is true
console.log("comp1 >= comp2 is ", comp1 >= comp2); // Greater than or equal: 6 >= 7 is false
console.log("comp1 <= comp2 is ", comp1 <= comp2); // Less than or equal: 6 <= 7 is true

// Example 1: Determine if a user’s input matches a predefined password
const userInputPassword = 'secret123'; // Example input
const correctPassword = 'mySecretPassword'; // Predefined password
const isAuthenticatedPassword = userInputPassword === correctPassword;
console.log(`Authenticated: ${isAuthenticatedPassword}`); // Expected: false

//Equality vs. Strict Equality
// Example 2: Compare two variables for equality with type coercion
const value1 = '5';
const value2 = 5;
const isEqual = value1 == value2;
console.log(`Equal: ${isEqual}`); // Expected: true
// Type coercion occurs when JavaScript automatically converts one data type to another during an operation or comparison using the equality operator (==) .

// Example 3: Compare two variables for equality without type coercion
const isEqual_2 = value1 === value2;
console.log(`Equal: ${isEqual_2}`); // Expected: false
// To avoid type coercion, you can use the strict equality operator (===) because it compares both value and type without any automatic conversion.


/*------------------------------------------------- Logical Operators ---------------------------------------*/
let x = 5;
let y = 6;
console.log(x < y && x == 5); // Logical AND: true && true = true
console.log(x > y || x == 5); // Logical OR: false || true = true
console.log(!false); // Logical NOT: !false = true
console.log(!true); // Logical NOT: !true = false

// Example 1: Determine if a user is eligible to vote based on their age
const userAgeToVote = 18;
const isEligibleToVote = userAgeToVote >= 18 && userAgeToVote < 100;
console.log(`Eligible to vote: ${isEligibleToVote}`); // Expected: true

// Example 2: Implement a user authentication system. Check if the user has both a valid username and password.
const isValidUsername = true; // Example checks
const isValidPassword = true;
const isAuthenticated = isValidUsername && isValidPassword; // && operator to check if both conditions are true
console.log(`Authenticated: ${isAuthenticated}`); // Expected: true

// Example 3: Check if a user is eligible for a discount based on their age
const eligibleAge = 65; // Example age
const isEligibleForDiscount = eligibleAge >= 60 || eligibleAge < 18; // || to apply multiple conditions
if (isEligibleForDiscount) {
    console.log(`User is eligible for a discount.`); // Expected: "User is eligible for a discount."
} else {
    console.log(`User is not eligible for a discount.`);
}

// Example 4: Display a default message if a user’s input is empty
const userInputOr = ''; // Example input
const displayMessage = userInputOr || 'No input provided';
console.log(displayMessage); // Expected: "No input provided"

// Example 5: Check if a user is eligible to apply for a loan
const isEligibleForLoan = false;
const isLoanApproved = !isEligibleForLoan;
console.log(`Loan approved: ${isLoanApproved}`); // Expected: true

// Example 6: Check if a user’s input is empty
const userNotInput = ''; // Example input
const isEmpty = !userNotInput;
console.log(`Input is empty: ${isEmpty}`); // Expected: true

// Example 7: Logical AND for Form Validation: Check if both email and password are provided for form submission.
const userEmail = 'user@example.com';
const password = 'password123';
const isFormValid = userEmail && password;
console.log(`Form valid: ${isFormValid ? 'Yes' : 'No'}`); // Expected: "Yes"

// Example 8: Using Logical OR for Default Settings: Apply default settings if user settings are not provided.
const userSettings = null;
const defaultSettings = { theme: 'light', fontSize: 14 };
const appliedSettings = userSettings || defaultSettings;
console.log(`Applied Settings: ${JSON.stringify(appliedSettings)}`); // Expected: { theme: 'light', fontSize: 14 }

// Example 9: Short-Circuit Evaluation: Display a welcome message if the user is logged in; otherwise, show a login prompt.
const isLoggedIn = true; // Example condition
const welcomeMessage = isLoggedIn && 'Welcome, user!';
console.log(welcomeMessage || 'Please log in.'); // Expected: "Welcome, user!"

// Example 10: Determine if a given year is a leap year
// Hint: Check if the year is divisible by 4 (except for years divisible by 100 but not 400).
const year = 2024; // Example year
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(`Leap year: ${isLeapYear}`); // Expected: true

/*------------------------------------------------ Bitwise Operators ---------------------------------------------*/
let bitwiseA = 5; // Binary: 0101
let bitwiseB = 3; // Binary: 0011
console.log("bitwiseA & bitwiseB = ", bitwiseA & bitwiseB); // Bitwise AND: 0101 & 0011 = 0001 (1)
console.log("bitwiseA | bitwiseB = ", bitwiseA | bitwiseB); // Bitwise OR: 0101 | 0011 = 0111 (7)
console.log("bitwiseA ^ bitwiseB = ", bitwiseA ^ bitwiseB); // Bitwise XOR: 0101 ^ 0011 = 0110 (6)
console.log("~bitwiseA = ", ~bitwiseA); // Bitwise NOT: ~0101 = 1010 (Two's complement, -6)
console.log("bitwiseA << 1 = ", bitwiseA << 1); // Left Shift: 0101 << 1 = 1010 (10)
console.log("bitwiseA >> 1 = ", bitwiseA >> 1); // Right shift/Sign-propagating right shift: 0101 >> 1 = 0010 (2)
console.log("bitwiseA >>> 1 = ", bitwiseA >>> 1); // Unsigned right shift/Zero-fill right shift: 0101 >>> 1 = 0010 (2)

/* Example: Bitwise Shift Operators
    - Problem: Multiply a number by 2 to the power of 3.
    - Solution: Use the left shift operator (number << 3).
*/
const number = 5;
const multipliedBy8 = number << 3;
console.log(`Result: ${multipliedBy8}`);

// Example 1: Masking with Bitwise AND
const mask = 0b11110000; // Example mask: 11110000
const numberToMask = 0b10101010; // Example number: 10101010
const maskedResult = numberToMask & mask;
console.log(`Masked result: ${maskedResult.toString(2)}`); // Expected: 10100000

// Example 2: Setting Bits with Bitwise OR
const setBitMask = 0b00000101; // Example mask: 00000101
const initialValue = 0b00000010; // Example initial value: 00000010
const valueWithSetBits = initialValue | setBitMask;
console.log(`Value with set bits: ${valueWithSetBits.toString(2)}`); // Expected: 00000111

// Example 3: Flipping Bits with Bitwise XOR
const flipBitMask = 0b00000111; // Example mask: 00000111
const valueToFlip = 0b00001100; // Example value: 00001100
const flippedValue = valueToFlip ^ flipBitMask;
console.log(`Flipped value: ${flippedValue.toString(2)}`); // Expected: 00001011

// Example 4: Clearing Bits with Bitwise AND and NOT
const clearBitMask = 0b11111011; // Example mask: 11111011
const valueToClear = 0b11111111; // Example value: 11111111
const valueWithClearedBits = valueToClear & clearBitMask;
console.log(`Value with cleared bits: ${valueWithClearedBits.toString(2)}`); // Expected: 11111011

// Example 5: Checking a Specific Bit with Bitwise AND
const bitToCheck = 1; // Example bit position (0-based): bit 1
const numberTo_Check = 0b1010; // Example number: 1010
const isBitSet = (numberTo_Check & (1 << bitToCheck)) !== 0;
console.log(`Bit ${bitToCheck} is set: ${isBitSet}`); // Expected: true

// Example 6: Swapping Two Variables Using Bitwise XOR
let swapA = 5; // Example values
let swapB = 3;
swapA = swapA ^ swapB;
swapB = swapA ^ swapB;
swapA = swapA ^ swapB;
console.log(`swapA: ${swapA}, swapB: ${swapB}`); // Expected: swapA: 3, swapB: 5

// Example 7: Performing Arithmetic Operations Efficiently with Bitwise Operators
const multiplyByTwo = 6;
const resultMultiply = multiplyByTwo << 1; // Equivalent to 6 * 2
console.log(`6 multiplied by 2: ${resultMultiply}`); // Expected: 12

const divideByTwo = 6;
const resultDivide = divideByTwo >> 1; // Equivalent to 6 / 2
console.log(`6 divided by 2: ${resultDivide}`); // Expected: 3

// Example 8: Checking Even or Odd Using Bitwise AND
const numberToCheckEvenOdd = 7; // Example number
const isEven = (numberToCheckEvenOdd & 1) === 0;
console.log(`Number is even: ${isEven}`); // Expected: false (7 is odd)

// Example 9: Counting the Number of Set Bits in an Integer
const numberToCountBits = 29; // Example number
let bitCount = 0;
let num = numberToCountBits;
while (num) {
    bitCount += num & 1;
    num >>= 1;
}
console.log(`Number of set bits: ${bitCount}`); // Expected: 4 (binary representation: 11101)

// Example 10: Using Bitwise Operators for Conditional Execution
const isActive = true; // Example conditions
const hasPermission = false;
const canAccess = isActive & hasPermission; // Bitwise AND for combining conditions
console.log(`User can access: ${canAccess}`); // Expected: 0 (false, because hasPermission is false)

// Bitwise Assignment Operators
a = 5; // Resetting a to 5
a &= b; // Bitwise AND and assign: a = 0101 & 0011 = 0001 (1)
console.log(`Bitwise AND Assignment result: ${a}`); // Expected: 1

a = 5; // Resetting a to 5
a |= b; // Bitwise OR and assign: a = 0101 | 0011 = 0111 (7)
console.log(`Bitwise OR Assignment result: ${a}`); // Expected: 7

// Swap the values of two variables without using a temporary variable.
a = 5; // Resetting a to 5
a ^= b; // Bitwise XOR and assign: a = 0101 ^ 0011 = 0110 (6)
b ^= a; // Bitwise XOR and assign: b = 0011 ^ 0110 = 0101 (5)
a ^= b; // Bitwise XOR and assign: a = 0110 ^ 0101 = 0011 (3)
console.log(`Bitwise XOR Assignment result: a: ${a}, b: ${b}`); // Expected: 3, 5

a = 5; // Resetting a to 5
a = ~a; // Bitwise NOT and assign: ~0101 = 1010 (inverts all bits) = -6 (two's complement)
console.log(`Bitwise NOT Assignment result: ${a}`); // Expected: -6

a = 5; // Resetting a to 5
a <<= 1; // Left shift and assign: a = 0101 << 1 = 1010 (10)
console.log(`Left Shift Assignment result: ${a}`); // Expected: 10

a = 5; // Resetting a to 5
a >>= 1; // Right shift and assign: a = 0101 >> 1 = 0010 (2)
console.log(`Right Shift Assignment result: ${a}`); // Expected: 2

a = -5; // Resetting a to -5 for unsigned right shift
a >>>= 1; // Unsigned right shift and assign: considering 32-bit signed integer representation
console.log(`Unsigned Right Shift Assignment result: ${a}`); // Expected: 2147483645

/*-------------------------------------------------- String Operators ---------------------------------------------------*/

// Example 1: Concatenation using + and adding a space between the strings
let str1 = "Hello";
let str2 = "World";
console.log("str1 + ' ' + str2 = ", str1 + ' ' + str2); // Expected: 'str1 + ' ' + str2 = Hello World'

// const str1 = "Hello, ";
// const str2 = "World!";
// const concatenated = str1 + str2;
// console.log(concatenated); // Expected: 'Hello, World!'

// Example 2a: Concatenation using + for creating a full name and using template literals for output
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
console.log(`Full name: ${fullName}`); // Expected: 'Full name: John Doe'

// Example 2b: Template Literals
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Expected: 'Hello, Alice!'

// Example 3: String Length
const strg = "JavaScript";
const length = strg.length;
console.log(length); // Expected: 10

// Example 4: Accessing Characters
const charAtIndex2 = strg[2];
console.log(charAtIndex2); // Expected: 'v'

// Example 5: Converting to Upper Case
const upperCaseStr = strg.toUpperCase();
console.log(upperCaseStr); // Expected: 'JAVASCRIPT'

// Example 6: Converting to Lower Case
const lowerCaseStr = strg.toLowerCase();
console.log(lowerCaseStr); // Expected: 'javascript'

// Example 7: Finding a Substring
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
const indexOfWord = sentence.indexOf(word);
console.log(indexOfWord); // Expected: 16

// Example 8: Checking Substring Presence
const hasWord = sentence.includes(word);
console.log(hasWord); // Expected: true

// Example 9: Extracting a Substring
const start = 4;
const lengthOfSubstring = 5;
const substring = sentence.substr(start, lengthOfSubstring);
console.log(substring); // Expected: 'quick'

// Example 10: Splitting a String
const words = sentence.split(' ');
console.log(words); // Expected: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

// Example 11: Joining an Array into a String
const joined = words.join(' ');
console.log(joined); // Expected: 'The quick brown fox jumps over the lazy dog.'

// Example 12: Replacing Substrings
const newSentence = sentence.replace("fox", "cat");
console.log(newSentence); // Expected: 'The quick brown cat jumps over the lazy dog.'

// Example 13: Trimming Whitespace
const paddedString = "   Hello World!   ";
const trimmedString = paddedString.trim();
console.log(trimmedString); // Expected: 'Hello World!'

// Example 14: Padding Strings
const padStartStr = strg.padStart(15, '*');
const padEndStr = strg.padEnd(15, '*');
console.log(padStartStr); // Expected: '*****JavaScript'
console.log(padEndStr);   // Expected: 'JavaScript*****'

// Example 15: Repeating Strings
const repeatedStr = "abc".repeat(3);
console.log(repeatedStr); // Expected: 'abcabcabc'

// Example 16: Checking Start/End of String
const startsWithThe = sentence.startsWith("The");
const endsWithDog = sentence.endsWith("dog.");
console.log(startsWithThe); // Expected: true
console.log(endsWithDog);   // Expected: true

// Example 17: Extracting Part of a String with slice
const sliced = sentence.slice(4, 9);
console.log(sliced); // Expected: 'quick'

// Example 18: Finding Last Occurrence
const lastOccurrence = sentence.lastIndexOf("the");
console.log(lastOccurrence); // Expected: 31

// Example 19: String to Array Conversion using spread operator
const arrayFromString = [...strg];
console.log(arrayFromString); // Expected: ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// Example 20: Checking if String is Empty
const emptyStr = "";
const isEmpty_ = emptyStr === "";
console.log(isEmpty_); // Expected: true

/*------- Conditional (Ternary) Operator: (condition ? exprIfTrue : exprIfFalse) or (condition ? trueValue : falseValue) ------*/

let age = 20;
let canVote = age >= 18 ? "Yes" : "No"; // Ternary: if age >= 18, canVote = "Yes"; else, canVote = "No"
console.log("Can vote: ", canVote);

// Example 1: Determine if a user is eligible for a discount based on their age.

const discountAge = 65; // Example age
const discountMessage = discountAge >= 60 ? 'Eligible' : 'Not Eligible';
console.log(`Discount status: ${discountMessage}`);

// Example 2: Display a message based on a user’s age. If the age is below 18, show “You are a minor”; otherwise, show “You are an adult.”

const userAge = 20; // Example age
const message = userAge < 18 ? 'You are a minor' : 'You are an adult';
console.log(message);

/*-------------------------------------------- Nullish Coalescing Operator (??) ---------------------------------------------*/
// Provides a default value if a variable is null or undefined.

let user;
console.log("User: ", user ?? "Guest"); // Provides default value if null or undefined: user is undefined, so prints "Guest"

// Example: Provide a default value if a variable is null or undefined.
const userNullishInput = null; // Example input
const defaultValue = 'No input provided';
const finalValue = userNullishInput ?? defaultValue;
console.log(`User input: ${finalValue}`);

/*----------------------------------------------- Optional Chaining Operator (?.) ---------------------------------------------*/
// Safely accesses nested properties.

let userProfile = { name: "John", address: { city: "New York" } };
console.log("City: ", userProfile?.address?.city); // Safely access nested properties: prints "New York"

/*----------------------------------------------- Comma Operator (,) ---------------------------------------------*/
// The comma operator allows multiple expressions to be evaluated in a single statement, returning the result of the last expression.
let k = 1, l = 2, m = 3; // Multiple variable declarations and assignments using comma operator
console.log(k); // Output: 1
console.log(l); // Output: 2
console.log(m); // Output: 3

// Example using the comma operator in a for loop
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(`i: ${i}, j: ${j}`);
}

/*-------------------------------------------------- typeof Operator ---------------------------------------------------*/
// The typeof operator returns a string indicating the type of an operand.
let n = 42;
console.log(typeof n); // Output: "number"

let str = "Hello";
console.log(typeof str); // Output: "string"

let arr = [1, 2, 3];
console.log(typeof arr); // Output: "object"

function greet() {
  console.log("Hello, world!");
}
console.log(typeof greet); // Output: "function"

/*-------------------------------------------------------- instanceof Operator ---------------------------------------------------*/
// The instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor.

// Example 1: Basic usage with constructor function
function Person(name) {
  this.name = name;
}

let john = new Person("John");
console.log(john instanceof Person); // Expected: true

let obj = {};
console.log(obj instanceof Object); // Expected: true

let arrInstance = [];
console.log(arrInstance instanceof Array); // Expected: true

let date = new Date();
console.log(date instanceof Date); // Expected: true

// Example 2: Checking inheritance with classes
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

let fluffy = new Dog("Fluffy", "Golden Retriever");
console.log(fluffy instanceof Dog); // Expected: true
console.log(fluffy instanceof Animal); // Expected: true

// Example 3: Using instanceof to check interface-like behavior
function Car(make, model) {
  this.make = make;
  this.model = model;
}

function Truck(make, model, payloadCapacity) {
  Car.call(this, make, model);
  this.payloadCapacity = payloadCapacity;
}

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

let truck = new Truck("Ford", "F150", "2000 lbs");
console.log(truck instanceof Truck); // Expected: true
console.log(truck instanceof Car); // Expected: true

/*---------------------------------------------------- Spread Operator (...) ---------------------------------------------------*/
// Copies arrays, merges arrays, and converts strings to arrays.

// Example 1: Copying Arrays
// The spread operator can be used to create a shallow copy of an array.
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Expected: [1, 2, 3]

// Example 2: Merging Arrays
// You can easily merge multiple arrays into one using the spread operator.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Expected: [1, 2, 3, 4, 5, 6]

// Example 3: Spreading Elements into Function Arguments
// The spread operator can spread the elements of an array as individual arguments to a function.
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // Expected: 6

// Example 4: Spreading in Object Literals
// The spread operator can be used to copy properties from one object to another.
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // Expected: { a: 1, b: 2 }

// Example 5: Adding/Updating Properties in Objects
// You can use the spread operator to add or update properties in objects.
const baseObject = { a: 1, b: 2 };
const updatedObject = { ...baseObject, b: 3, c: 4 };
console.log(updatedObject); // Expected: { a: 1, b: 3, c: 4 }

// Example 6: Spreading Strings
// You can spread a string into an array of its characters.
const string = "hello";
const chars = [...string];
console.log(chars); // Expected: ['h', 'e', 'l', 'l', 'o']

// Example 7: Rest Parameters in Functions
// The spread operator can be used in function definitions to gather all remaining arguments into an array.
const sumAll = (...args) => args.reduce((acc, val) => acc + val, 0);
console.log(sumAll(1, 2, 3, 4)); // Expected: 10

// Example 8: Removing Duplicates from an Array
// You can use the spread operator with `Set` to remove duplicates from an array.
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbersWithDuplicates)];
console.log(uniqueNumbers); // Expected: [1, 2, 3, 4, 5]

// Example 9: Combining Multiple Objects
// The spread operator can be used to combine properties from multiple objects into one.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const combinedObject = { ...obj1, ...obj2, ...obj3 };
console.log(combinedObject); // Expected: { a: 1, b: 2, c: 3 }

// Example 10: Destructuring with Spread Operator
// You can use the spread operator in destructuring assignments to gather the remaining elements into a new array.
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Expected: 1
console.log(second); // Expected: 2
console.log(rest); // Expected: [3, 4, 5]


// Comments
// This is a single line comment
/* This is a sample multiline comment and a tutorial
from
codewithharry */

// Replit Tricks
// Press alt and click on multiple lines to get multiple cursors
// Use alt+up/down arrow to move the line up/down when cursor blinking on the line
// Use alt+left/right arrow to move the cursor left/right when cursor blinking on the line
// Use alt+shift+down arrow to copy the line below the current line
// Use alt+shift+up arrow to copy the line above the current line
// Use alt+shift+left/right arrow to copy the word left/right when cursor blinking on the word
// To comment or uncomment out any code, press ctrl+/

// Conclusions
/*
1. Arithmetic Operators: Perform basic arithmetic operations like addition, subtraction, multiplication, division, exponentiation, and modulus. They also include increment and decrement operators for updating variable values.

2. Assignment Operators: Used to assign values to variables and can also perform arithmetic operations in conjunction with assignment.

3. Comparison Operators: Compare two values and return a boolean value. They include equality, inequality, greater than, less than, greater than or equal to, and less than or equal to.

4. Logical Operators: Perform logical operations and return boolean values. They include AND (&&), OR (||), and NOT (!).

5. Bitwise Operators: Perform operations on binary representations of numbers. They include:
   - AND (&): Sets each bit to 1 if both bits are 1.
   - OR (|): Sets each bit to 1 if one of two bits is 1.
   - XOR (^): Sets each bit to 1 if only one of two bits is 1.
   - NOT (~): Inverts all the bits.
   - Left Shift (<<): Shifts bits to the left.
   - Right Shift (>>): Shifts bits to the right.
   - Unsigned Right Shift (>>>): Shifts bits to the right, filling zeros from the left.

6. Bitwise Assignment Operators: Perform bitwise operations and assign the result to the variable. They include &=, |=, ^=, <<=, >>=, and >>>=.

7. String Operators: Concatenate strings using the + operator.

8. Ternary Operator: Shortens an if-else statement into a single line of code. It takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is true, followed by a colon (:) and another expression to execute if the condition is false.

9. Nullish Coalescing Operator (??): Provides a default value if the variable is null or undefined.

10. Optional Chaining Operator (?.): Allows safe access to deeply nested object properties without having to check for the existence of each level.
*/