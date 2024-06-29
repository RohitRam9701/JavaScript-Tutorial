// Example 1: Checking Age for Voting Eligibility
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// Example 2: Determining Ticket Price Based on Age
age = 15;
let ticketPrice;

if (age < 12) {
    ticketPrice = 5;
} else if (age <= 18) {
    ticketPrice = 7;
} else if (age <= 60) {
    ticketPrice = 10;
} else {
    ticketPrice = 6;
}

console.log("The ticket price is $" + ticketPrice);

// Example 3: Checking for Discount Eligibility Based on Membership
let isMember = true;
let purchaseAmount = 100;
let discount;

if (isMember) {
    discount = purchaseAmount * 0.1; // 10% discount
} else {
    discount = 0;
}

console.log("The discount amount is $" + discount);

// Example 4: Determining Weather Message
let weather = "sunny";

if (weather === "sunny") {
    console.log("It's a sunny day! Wear sunglasses.");
} else if (weather === "rainy") {
    console.log("It's raining. Take an umbrella.");
} else if (weather === "snowy") {
    console.log("It's snowy outside. Wear a coat.");
} else {
    console.log("Have a nice day!");
}

// Example 5: Determining the Day of the Week
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
        break;
}

console.log("Today is " + dayName);