document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    alert('Your message has been sent!'); // Replace with your desired functionality
    this.reset(); // Reset the form fields
});