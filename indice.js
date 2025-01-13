document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    const firstname = document.getElementById('Firstname');
    const lastname = document.getElementById('Lastname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    // Clear previous error styles and messages
    const inputs = [firstname, lastname, email, password];
    inputs.forEach(input => {
        input.style.border = '1px solid #ccc'; // Reset border
    });

    // Regex patterns
    const namePattern = /^[A-Za-z]{2,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Validate Firstname
    if (!namePattern.test(firstname.value)) {
        isValid = false;
        showError(firstname, 'Firstname must contain only letters and be at least 2 characters long.');
    }

    // Validate Lastname
    if (!namePattern.test(lastname.value)) {
        isValid = false;
        showError(lastname, 'Lastname must contain only letters and be at least 2 characters long.');
    }

    // Validate Email
    if (!emailPattern.test(email.value)) {
        isValid = false;
        showError(email, 'Please enter a valid email address.');
    }

    // Validate Password
    if (!passwordPattern.test(password.value)) {
        isValid = false;
        showError(password, 'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one number.');
    }

    // If form is valid
    if (isValid) {
        alert('Form submitted successfully!');
    }
});

// Function to show error
function showError(input, message) {
    input.style.border = '2px solid red'; // Highlight input with error
    input.value = ''; // Clear the input value
    input.placeholder = message; // Set error message in placeholder
}