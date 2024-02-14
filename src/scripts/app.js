"use strict";
// Import jQuery
import $ from 'jquery';

// function animateCorner() {
//     const cornerElement = document.querySelector('.post-it__corner');
//     cornerElement.classList.toggle('--animatecorner');
// }

// function toggleVisibility() {
//     const navElement = document.querySelector('.post-it__nav');
//     navElement.classList.toggle('--toggleVisibility');
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const cornerElement = document.querySelector('.post-it__corner');
//     cornerElement.addEventListener('click', animateCorner);
//     cornerElement.addEventListener('click', toggleVisibility);
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const cornerElement = document.querySelector('.close');
//     cornerElement.addEventListener('click', animateCorner);
//     cornerElement.addEventListener('click', toggleVisibility);
// });

// slider
document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".post-it__page");
    let currentPageIndex = 0;

    function setActivePage(index) {
        switch (index) {
            case 0:
                idee.classList.add("--active");
                dispositif.classList.remove("--active");
                avantages.classList.remove("--active");
                projets.classList.remove("--active");
                produit.classList.remove("--active");
                break;
            case 1:
                idee.classList.remove("--active");
                dispositif.classList.add("--active");
                avantages.classList.remove("--active");
                projets.classList.remove("--active");
                produit.classList.remove("--active");
                break;
            case 2:
                idee.classList.remove("--active");
                dispositif.classList.remove("--active");
                avantages.classList.add("--active");
                projets.classList.remove("--active");
                produit.classList.remove("--active");
                break;
            case 3:
                idee.classList.remove("--active");
                dispositif.classList.remove("--active");
                avantages.classList.remove("--active");
                projets.classList.add("--active");
                produit.classList.remove("--active");
                break;
            case 4:
                idee.classList.remove("--active");
                dispositif.classList.remove("--active");
                avantages.classList.remove("--active");
                projets.classList.remove("--active");
                produit.classList.add("--active");
                break;
        }
    }

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
            setActivePage(currentPageIndex);
        }
    }

    function goToPreviousPage() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            showPage(currentPageIndex);
            setActivePage(currentPageIndex);
        }
    }

    const nextBtn = document.querySelector(".footer__next-btn");
    const prevBtn = document.querySelector(".footer__prev-btn");
    const idee = document.querySelector("#idee");
    const dispositif = document.querySelector("#dispositif");
    const avantages = document.querySelector("#avantages");
    const projets = document.querySelector("#projets");
    const produit = document.querySelector("#produit");

    nextBtn.addEventListener("click", goToNextPage);
    prevBtn.addEventListener("click", goToPreviousPage);
    idee.addEventListener("click", function () {
        currentPageIndex = 0;
        showPage(currentPageIndex);
        setActivePage(currentPageIndex);
    });
    dispositif.addEventListener("click", function () {
        currentPageIndex = 1;
        showPage(currentPageIndex);
        setActivePage(currentPageIndex);
    });
    avantages.addEventListener("click", function () {
        currentPageIndex = 2;
        showPage(currentPageIndex);
        setActivePage(currentPageIndex);
    });
    projets.addEventListener("click", function () {
        currentPageIndex = 3;
        showPage(currentPageIndex);
        setActivePage(currentPageIndex);
    });
    produit.addEventListener("click", function () {
        currentPageIndex = 4;
        showPage(currentPageIndex);
        setActivePage(currentPageIndex);
    });
});