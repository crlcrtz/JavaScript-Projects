// main.js

// Function to perform addition using the + operator
function showAddition() {
  let x = 10;
  let y = 5;
  let result = x + y; // Addition
  document.getElementById("output").innerHTML = `Addition: ${x} + ${y} = ${result}`;
}

// Function to perform subtraction using the - operator
function showSubtraction() {
  let x = 10;
  let y = 5;
  let result = x - y; // Subtraction
  document.getElementById("output").innerHTML = `Subtraction: ${x} - ${y} = ${result}`;
}

// Function to perform multiplication using the * operator
function showMultiplication() {
  let x = 10;
  let y = 5;
  let result = x * y; // Multiplication
  document.getElementById("output").innerHTML = `Multiplication: ${x} × ${y} = ${result}`;
}

// Function to perform modulus using the % operator
function showModulus() {
  let x = 10;
  let y = 3;
  let result = x % y; // Modulus
  document.getElementById("output").innerHTML = `Modulus: ${x} % ${y} = ${result}`;
}

// Function to perform increment using the ++ operator
function showIncrement() {
  let x = 5;
  x++; // Increment by 1
  document.getElementById("output").innerHTML = `Increment: Value after x++ is ${x}`;
}

// Function to perform decrement using the -- operator
function showDecrement() {
  let x = 5;
  x--; // Decrement by 1
  document.getElementById("output").innerHTML = `Decrement: Value after x-- is ${x}`;
}

// Function to generate a random number using Math.random()
function showRandom() {
  // Math.random() returns a number between 0 and 1, we scale it to 0–100
  let randomNum = Math.floor(Math.random() * 101);
  document.getElementById("output").innerHTML = `Random Number (0-100): ${randomNum}`;
}
