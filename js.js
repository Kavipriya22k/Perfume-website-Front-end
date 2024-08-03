// JavaScript code goes here
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(this);
            const formDataSerialized = Object.fromEntries(formData.entries());
            console.log(formDataSerialized); // Replace with your actual form submission logic
        });
    }
});
