// main.js

// Function that uses a while loop to count from 1 to 5
function runWhileLoop() {
  let count = 1;
  let result = "While loop output: ";
  
  while (count <= 5) {
    result += count + " ";
    count++;
  }

  document.getElementById("output").textContent = result.trim();
}

// Function that uses a for loop to count from 5 down to 1
function runForLoop() {
  let result = "For loop output: ";
  
  for (let i = 5; i >= 1; i--) {
    result += i + " ";
  }

  document.getElementById("output").textContent = result.trim();
}

// Function that uses an array and displays its elements
function showArray() {
  let fruits = ["Apple", "Banana", "Cherry", "Date"];
  let result = "Array elements: " + fruits.join(", ");
  document.getElementById("output").textContent = result;
}

// Create an object using the let keyword and display its properties
function showObject() {
  let person = {
    name: "John",
    age: 28,
    city: "Vancouver"
  };

  let result = `Object properties: Name - ${person.name}, Age - ${person.age}, City - ${person.city}`;
  document.getElementById("output").textContent = result;
}
