// program that checks if the number is positive, negative or zero
const ps = require("prompt-sync");
const prompt = ps();

console.log("***CALCULATOR***")

// input from the user
const number1 = parseInt(prompt("Enter a number: "));

// another input from a user
const number2 = parseInt(prompt("Enter another number: "));

// third input from a user
const number3 = parseInt(prompt("Enter another number: "))
// outputs each equation

console.log(number1 + " plus " + number2 + " = " + (number1 + number2 + number3));
console.log(number1 + " minus " + number2 + " = " + (number1 - number2 - number3));
console.log(number1 + " times " + number2 + " = " + (number1 * number2 * number3));
console.log(number1 + " devided " + number2 + " = " + (number1 / number2 / number3));