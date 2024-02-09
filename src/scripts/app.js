"use strict";
// Import jQuery
import $ from 'jquery';

// Function to animate .paper:hover::before
function animatePaper() {
    // Get the .paper element
    const cornerElement = document.querySelector('.corner');

    // Add a class to trigger the animation
    cornerElement.classList.toggle('animate-paper');
}

function toggleVisibility() {
    const navElement = document.querySelector('.nav');
    navElement.classList.toggle('toggleVisibility');
}

// Attach the onclick event to trigger the animation
document.addEventListener('DOMContentLoaded', () => {
    const cornerElement = document.querySelector('.corner');
    cornerElement.addEventListener('click', animatePaper);
    cornerElement.addEventListener('click', toggleVisibility);
});
