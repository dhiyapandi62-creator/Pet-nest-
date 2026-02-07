// script.js for Pet Nest website

// Function to display current date and time
function displayDateTime() {
    const now = new Date();
    const utcDateTime = now.toUTCString();
    console.log('Current Date and Time (UTC): ' + utcDateTime);
}

displayDateTime();
