// Get the night-mode checkbox element
function toggleDarkMode() {
    // Get the body element
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}


// Add event listener to night-mode checkbox
const nightModeCheckbox = document.getElementById('night-mode');
nightModeCheckbox.addEventListener('change', function() {
    console.log(`Night mode checkbox state: ${nightModeCheckbox.checked}`);
    toggleDarkMode();
});

// Create a function to detect if the user is on a mobile or desktop device
function detectDeviceType() {
    // Check if the screen width is less than or equal to 768 pixels
    if (window.innerWidth <= 768) {
        console.log("Mobile device");
        nightModeCheckbox.checked = true;
        toggleDarkMode();
    } else {
        console.log("Desktop device");
    }
}

// Call the detectDeviceType function
detectDeviceType();

