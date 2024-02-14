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

document.addEventListener('DOMContentLoaded', () => {
    const cornerElement = document.querySelector('.close');
    cornerElement.addEventListener('click', animateCorner);
    cornerElement.addEventListener('click', toggleVisibility);
});

// TODO intégrer slider
document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".post-it__page");
    let currentPageIndex = 0;

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            if (index === pageIndex) {
                page.classList.add("--active");
            } else {
                page.classList.remove("--active");
            }
        });
    }

    function goToNextPage() {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            showPage(currentPageIndex);
        }
    }

    function goToPreviousPage() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            showPage(currentPageIndex);
        }
    }

    const nextBtn = document.querySelector(".footer__next-btn");
    const prevBtn = document.querySelector(".footer__prev-btn");

    nextBtn.addEventListener("click", goToNextPage);
    prevBtn.addEventListener("click", goToPreviousPage);
});