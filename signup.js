document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('response-message');

    if (name && email && phone && message) {
        responseMessage.textContent = 'Thank you for your message, ' + name + '! We will get back to you shortly.';
        responseMessage.style.color = 'green';
        document.getElementById('contact-form').reset();
    } else {
        responseMessage.textContent = 'Please fill in all fields.';
        responseMessage.style.color = 'red';
    }
});
