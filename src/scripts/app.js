"use strict";
// Import jQuery
import $ from 'jquery';

function animateCorner() {
    const cornerElement = document.querySelector('.post-it__corner');
    cornerElement.classList.toggle('--animatecorner');
}

function toggleVisibility() {
    const navElement = document.querySelector('.post-it__nav');
    navElement.classList.toggle('--toggleVisibility');
}

// Attach the onclick event to trigger the animation
document.addEventListener('DOMContentLoaded', () => {
    const cornerElement = document.querySelector('.post-it__corner');
    cornerElement.addEventListener('click', animateCorner);
    cornerElement.addEventListener('click', toggleVisibility);
});
