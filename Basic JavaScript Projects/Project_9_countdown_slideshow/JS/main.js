// main.js

// Countdown function that counts down from 10 to 0
function countdown() {
  let count = 10;
  const countdownElement = document.getElementById("countdown");

  const intervalId = setInterval(() => {
    countdownElement.textContent = count;

    if (count === 0) {
      clearInterval(intervalId);
      countdownElement.textContent = "Time's up!";
    }

    count--;
  }, 1000);
}

// Basic slideshow implementation
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

// Function to show slides one by one
function showSlides() {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increase slideIndex and reset if needed
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";

  // Change slide every 3 seconds
  setTimeout(showSlides, 3000);
}

// Initialize countdown and slideshow when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  countdown();  // Start countdown
  showSlides(); // Start slideshow
});
