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

    let isScrolling = false;
    const deltaThreshold = 50; // Adjust this value as needed

    document.addEventListener('wheel', function(event) {
        if (!isScrolling && (Math.abs(event.deltaY) >= deltaThreshold || Math.abs(event.deltaX) >= deltaThreshold)) {
            isScrolling = true;
            scrollListener(event);
        }
    });

    function scrollListener(event){
        if(Math.abs(event.deltaY) >= deltaThreshold){
            if(event.deltaY < 0){
                goToPreviousPage();
            } else if(event.deltaY > 0){
                goToNextPage();
            }
        } else if(Math.abs(event.deltaX) >= deltaThreshold){
            if(event.deltaX < 0){
                goToPreviousPage();
            } else if(event.deltaX > 0){
                goToNextPage();
            }
        }
        setTimeout(() => { isScrolling = false; }, 500);
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

//carousel

function moveToSelected(element) {
    var selected;
    if (element === "next") {
      selected = $(".selected").next();
    } else if (element === "prev") {
      selected = $(".selected").prev();
    } else {
      selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
    $(selected).removeClass().addClass("selected");
  
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");
  
    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');
}

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            moveToSelected('prev');
            break;
  
        case 39: // right
            moveToSelected('next');
            break;
  
        default: return;
    }
    e.preventDefault();
});
  
$('#post-it__carousel div').click(function() {
    moveToSelected($(this));
});
  
$('#prev').click(function() {
    moveToSelected('prev');
});
  
$('#next').click(function() {
    moveToSelected('next');
});


