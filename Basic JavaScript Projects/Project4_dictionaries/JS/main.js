// main.js

// Define a JavaScript object acting as a dictionary
const person = {
  name: "Alice",
  age: 30,
  city: "Toronto"
};

// Function to display a key-value pair in the "output" div
function showKeyValue(key) {
  const output = document.getElementById("output");

  // Check if the key exists in the dictionary
  if (key in person) {
    output.textContent = `${key}: ${person[key]}`;
  } else {
    output.textContent = `Key "${key}" does not exist.`;
  }
}

// Function to delete a key from the dictionary
function deleteKey(key) {
  // Delete the key from the dictionary if it exists
  if (key in person) {
    delete person[key];
    document.getElementById("output").textContent = `Deleted key "${key}".`;
  } else {
    document.getElementById("output").textContent = `Key "${key}" not found.`;
  }
}
