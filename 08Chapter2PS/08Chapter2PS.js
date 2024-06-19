// Chapter 2PS

// Problem No 1

let age = prompt("What is your age?")
age = Number.parseInt(age)
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}

// Problem No 2

let Age = prompt("What is your age?")
switch (Age) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}

// Problem No 3

let num = prompt("What is your number?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}

// Problem No 4

let Num = prompt("What is your number?")
Num = Number.parseInt(Num)
if (Num % 2 == 0 || Num % 3 == 0) {
  console.log("Your number is divisible by 2 or 3")
}
else {
  console.log("Your number is not divisible by 2 or 3")
}

// Problem No 5
let age2 = prompt("Enter your age");
let a = age2 >= 18 ? "You can drive" : "You cannot drive"
console.log(a);

/*
let age2 = prompt("Enter your age");
console.log("You", (age2 >=18? "can drive" : "cannot drive"));
*/
