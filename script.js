// script.js

// ----------- Interactive Feature 1: Click Counter -----------

// Select elements
const countBtn = document.getElementById('countBtn');
const clickCountDisplay = document.getElementById('clickCount');

// Initialize count
let clickCount = 0;

// Event listener for click button
countBtn.addEventListener('click', () => {
  clickCount++;
  clickCountDisplay.textContent = clickCount;
});


// ----------- Interactive Feature 2: Color Changer -----------

// Select elements
const colorBtn = document.getElementById('colorBtn');
const colorText = document.getElementById('colorText');

// Array of colors
const colors = ['red', 'green', 'blue', 'purple', 'orange', 'teal'];

// Event listener to change text color randomly
colorBtn.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorText.style.color = randomColor;
});


// ----------- Custom Form Validation -----------

const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent default form submission

  // Clear previous feedback
  formFeedback.textContent = '';
  formFeedback.style.color = 'red';

  // Get form values and trim whitespace
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  // Validation flags
  let isValid = true;
  let messages = [];

  // Name validation: required and min length 2
  if (name === '') {
    isValid = false;
    messages.push('Name is required.');
  } else if (name.length < 2) {
    isValid = false;
    messages.push('Name must be at least 2 characters.');
  }

  // Email validation: required and basic pattern
  if (email === '') {
    isValid = false;
    messages.push('Email is required.');
  } else if (!validateEmail(email)) {
    isValid = false;
    messages.push('Email format is invalid.');
  }

  // Message validation: required and min length 10
  if (message === '') {
    isValid = false;
    messages.push('Message is required.');
  } else if (message.length < 10) {
    isValid = false;
    messages.push('Message must be at least 10 characters.');
  }

  if (isValid) {
    formFeedback.style.color = 'green';
    formFeedback.textContent = 'Thank you! Your message has been sent.';
    contactForm.reset();
  } else {
    formFeedback.textContent = messages.join(' ');
  }
});


// Helper function to validate email using regex
function validateEmail(email) {
  // Simple email regex pattern
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
