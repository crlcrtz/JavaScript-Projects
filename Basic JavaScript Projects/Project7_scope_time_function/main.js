// main.js

// Global variable
let globalVar = "I am a global variable";

// Function with local variable and an if statement
function checkNumber(num) {
  // Local variable
  let localVar = "I am a local variable";

  // Debug output to console to check variable scopes
  console.log("Global variable:", globalVar);
  console.log("Local variable:", localVar);

  // If statement to check if num is greater than 5
  if (num > 5) {
    document.getElementById("timeOutput").textContent = `${num} is greater than 5`;
  } else {
    document.getElementById("timeOutput").textContent = `${num} is 5 or less`;
  }
}

// Function with an intentional error for debugging
function intentionalError() {
  try {
    // This will cause a ReferenceError because 'undeclaredVar' is not defined
    console.log(undeclaredVar);
  } catch (error) {
    // Log error to console for debugging
    console.log("An error occurred:", error.message);
    alert("Check the console for the intentional error message.");
  }
}

// Time_function - displays current time in an HTML element
function time_function() {
  const currentTime = new Date(); // Get current date and time
  const timeString = currentTime.toLocaleTimeString(); // Format as human-readable time

  // Output time to the page
  document.getElementById("timeOutput").textContent = `Current time: ${timeString}`;
}
{\rtf1}