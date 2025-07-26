// main.js

// Function demonstrating concat()
function showConcat() {
  const str1 = "Hello";
  const str2 = "World";
  // Concatenate str1 and str2 with a space
  const result = str1.concat(" ", str2);
  document.getElementById("output").textContent = `concat(): "${str1}" + " " + "${str2}" = "${result}"`;
}

// Function demonstrating slice()
function showSlice() {
  const str = "JavaScript";
  // Extract characters from index 4 to 10 (excluding 10)
  const result = str.slice(4, 10);
  document.getElementById("output").textContent = `slice(): "JavaScript".slice(4,10) = "${result}"`;
}

// Function demonstrating toString()
function showToString() {
  const num = 12345;
  // Convert number to string
  const result = num.toString();
  document.getElementById("output").textContent = `toString(): Number ${num} converted to string: "${result}"`;
}

// Function demonstrating toPrecision()
function showToPrecision() {
  const num = 3.1415926535;
  // Format number to 4 significant digits
  const result = num.toPrecision(4);
  document.getElementById("output").textContent = `toPrecision(): ${num} with 4 significant digits = "${result}"`;
}
