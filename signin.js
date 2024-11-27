 
 
javascript
// signup.js
document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector('form'); // Select the form
const nameInput = document.getElementById('name'); // Select the name input
const emailInput = document.getElementById('email'); // Select the email input
const messageInput = document.getElementById('message'); // Select the message textarea
// Event listener for form submission
form.addEventListener('submit', (event) => {
event.preventDefault(); // Prevent the form from submitting immediately
// Validate inputs
if (validateForm()) {
// Simulate form submission
console.log('Form submitted successfully');
displayConfirmation();
form.reset(); // Reset the form
}
});
// Function to validate form inputs
function validateForm() {
let isValid = true; // Track the validity of inputs
// Check if the name input is not empty
if (!nameInput.value.trim()) {
alert('Please enter your name.');
isValid = false;
}
// Check if the email input is valid
const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
if (!emailPattern.test(emailInput.value.trim())) {
alert('Please enter a valid email address.');
isValid = false;
}
// Check if the message input is not empty
if (!messageInput.value.trim()) {
alert('Please enter a message.');
isValid = false;
}
return isValid; // Return the overall validity
}
// Function to display confirmation message
function displayConfirmation() {
const confirmationMessage = document.createElement('div');
confirmationMessage.style.backgroundColor = '#d4edda';
confirmationMessage.style.color = '#155724';
confirmationMessage.style.padding = '10px';
confirmationMessage.style.border = '1px solid #c3e6cb';
confirmationMessage.innerText = 'Your message has been sent successfully!';
document.body.insertBefore(confirmationMessage, form);
// Remove the confirmation message after 5 seconds
setTimeout(() => {
confirmationMessage.remove();
}, 5000);
}
});
 