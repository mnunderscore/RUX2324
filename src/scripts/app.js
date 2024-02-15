"use strict";

// slider
document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".post-it__page");
    let currentPageIndex = 0;

    document.addEventListener('keydown', keyboardListener);

    function keyboardListener(event){
        if(event.code == 'ArrowLeft'){
            goToPreviousPage();
        } else if(event.code == 'ArrowRight'){
            goToNextPage();
        }
    }

    // TODO: Corriger scroll sur PC portable, un "gros scroll" fait défiler plusieurs pages au lieu d'une seule

    let lastScrollTime = 0;
    let isScrolling = false;
    const scrollDelay = 1000; // delay in milliseconds

    document.addEventListener('wheel', scrollListener);

    function scrollListener(event){
        const currentTime = new Date().getTime();

        if(!isScrolling && currentTime - lastScrollTime > scrollDelay){
            isScrolling = true;
            if(event.deltaY < 0){
                goToPreviousPage();
            } else if(event.deltaY > 0){
                goToNextPage();
            }
            lastScrollTime = currentTime;
            setTimeout(() => { isScrolling = false; }, scrollDelay);
        }
    }

    function setActivePage(index) {
        const elements = [idee, dispositif, avantages, projets, produit];

        elements.forEach((element, i) => {
            if (i === index) {
                element.classList.add("footer__slider--active");
            } else {
                element.classList.remove("footer__slider--active");
            }
        });
    }

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            if (index === pageIndex) {
                page.classList.add("post-it__page--active");
            } else {
                page.classList.remove("post-it__page--active");
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
    idee.addEventListener("click", () => setPage(0));
    dispositif.addEventListener("click", () => setPage(1));
    avantages.addEventListener("click", () => setPage(2));
    projets.addEventListener("click", () => setPage(3));
    produit.addEventListener("click", () => setPage(4));

    function setPage(index) {
        currentPageIndex = index;
        showPage(currentPageIndex);
        setActivePage(currentPageIndex);
    }
});
