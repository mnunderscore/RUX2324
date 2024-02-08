"use strict";
"use strict";

// Function to animate .paper:hover::before
function animatePaper() {
    // Get the .paper element
    const paperElement = document.querySelector('.paper');

    // Add a class to trigger the animation
    paperElement.classList.toggle('animate-paper');
}

// Attach the onclick event to trigger the animation
document.addEventListener('DOMContentLoaded', () => {
    const paperElement = document.querySelector('.paper');
    paperElement.addEventListener('click', animatePaper);
});
