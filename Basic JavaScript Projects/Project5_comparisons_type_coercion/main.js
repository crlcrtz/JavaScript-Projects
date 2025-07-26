// main.js

// Variable of your choosing
let variable = 42;

// Display data type using typeof and document.write
document.write(`<p>Data type of variable (${variable}) is: <strong>${typeof variable}</strong></p>`);

// Expression combining a string and a number
let combined = "The answer is " + 42;
document.write(`<p>Combining string and number: <strong>${combined}</strong></p>`);

// Using comparison and logical operators and displaying results

// == operator (loose equality)
let looseEquality = (5 == "5");

// === operator (strict equality)
let strictEquality = (5 === "5");

// Greater than >
let greaterThan = (10 > 7);

// Less than <
let lessThan = (3 < 2);

// Logical AND &&
let logicalAnd = (true && false);

// Logical OR ||
let logicalOr = (true || false);

// Logical NOT !
let logicalNot = !true;

// Display all the results using document.write
document.write("<h2>Comparison & Logical Operators Results:</h2>");
document.write(`<p>5 == "5": <strong>${looseEquality}</strong></p>`);
document.write(`<p>5 === "5": <strong>${strictEquality}</strong></p>`);
document.write(`<p>10 > 7: <strong>${greaterThan}</strong></p>`);
document.write(`<p>3 < 2: <strong>${lessThan}</strong></p>`);
document.write(`<p>true && false: <strong>${logicalAnd}</strong></p>`);
document.write(`<p>true || false: <strong>${logicalOr}</strong></p>`);
document.write(`<p>!true: <strong>${logicalNot}</strong></p>`);
