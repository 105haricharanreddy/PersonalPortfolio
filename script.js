
// Get the contact form
const contactForm = document.getElementById("contactForm");

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Handle form submission
contactForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate name
    if (name === "") {
        alert("Please enter your name");
        return;
    }

    // Validate email
    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }

    // Validate message
    if (message === "") {
        alert("Please enter your message");
        return;
    }

    // Display success message
    alert("Thank you! Your message has been submitted successfully.");

    // Clear the form
    contactForm.reset();
});
