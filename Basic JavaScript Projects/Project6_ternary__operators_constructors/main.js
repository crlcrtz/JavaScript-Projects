// main.js

// Function that uses a ternary operator based on user input from the browser
function checkAge() {
  const ageInput = document.getElementById("ageInput").value;
  // Ternary operator: check if age is 18 or older
  const message = ageInput >= 18 ? "You are an adult." : "You are a minor.";
  document.getElementById("ternaryResult").textContent = message;
}

// Constructor function using 'this' keyword
function Person(name, age) {
  this.name = name;
  this.age = age;

  // Nested function to describe the person
  this.describe = function() {
    // Nested function that returns a greeting string
    function greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Use call() to set 'this' inside nested function correctly
    return greeting.call(this);
  };
}

// Function to create a Person object and display the result
function createPerson() {
  // Create new person object using 'new' keyword
  const person1 = new Person("Alice", 30);

  // Call nested describe function and display the message
  const description = person1.describe();
  document.getElementById("constructorResult").textContent = description;
}
