let a = prompt("Hey whats you age?");
console.log(typeof a);
a = Number.parseInt(a); // Converting the string to a number
console.log(typeof a);
// If Statement
/* 
if(a>17){
     alert("This is a valid age and you can drive");
}  
*/
// If-Else Statement
/* 
if(a>17){
  alert("This is a valid age and you can drive");
}  
else {
  alert("This is an invalid age and you can't drive);   
}
*/

// If-Else-If statement 
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")
console.log("You can", (a<18? "not drive" :"drive"));

// replit shortcut: 
// use `alt+ctrl+shift+(` to put the selected statement in brackets()
// use `alt+ctrl+shift+{` to put statement in brackets {}.
// shift is used here as () and {} are accessed by pressing shift on keyboard.
// use `alt+ctrl+[` to put statement in brackets [].

// HomeWork - Explore switch statement and write a basic program in the comments

// Switch Statement
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

let x = prompt("Enter the value of x");
const m = 12, n = 4;
switch (x) {
  case '1':
    console.log("Addition", m+n);
    break;  
  case '2':
    console.log("Subtraction", m-n);
    break;  
  case '3':
    console.log("Multiplication", m*n);
    break;  
  case '4':
    console.log("Division", m/n);
    break;
  default:
    console.log("Remainder", m%n);
}
/*
let x = prompt("Enter the value of x");
x = Number.parseInt(x);
//Or, let x = Number(prompt("Enter the value of x")); // Number() function to convert the string returned by prompt into number so that my input works well.
const m = 12, n = 4;
switch (x) {
  case 1:
    console.log("Addition", m+n);
    break;  
  case 2:
    console.log("Subtraction", m-n);
    break;  
  case 3:
    console.log("Multiplication", m*n);
    break;  
  case 4:
    console.log("Division", m/n);
    break;
  default:
    console.log("Remainder", m%n);
}*/
