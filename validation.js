// Function to validate an email address
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Export the function for unit testing in Node.js
if (typeof module !== "undefined") {
    module.exports = { validateEmail };
}