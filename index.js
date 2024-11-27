 
javascript
// index.js
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
const footer = document.querySelector('footer'); // Select the footer element
const toggleFooterButton = document.createElement('button'); // Create a button to toggle footer visibility
toggleFooterButton.textContent = 'Toggle Footer'; // Set button text
document.body.insertBefore(toggleFooterButton, footer); // Insert button before the footer
// Add an event listener to the button
toggleFooterButton.addEventListener('click', () => {
// Toggle the footer visibility
if (footer.style.display === 'none') {
footer.style.display = 'block'; // Show footer
} else {
footer.style.display = 'none'; // Hide footer
}
});
// Display a greeting message after a short delay
setTimeout(() => {
alert('Welcome to Abdulhafiz TV! Enjoy your visit.'); // Display welcome message
}, 2000); // 2 seconds delay
});
 