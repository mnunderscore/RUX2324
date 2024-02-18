"use strict";

// slider
document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".post-it__page");
  let currentPageIndex = 0;

  document.addEventListener("keydown", keyboardListener);

  function keyboardListener(event) {
    if (event.code == "ArrowLeft") {
      goToPreviousPage();
    } else if (event.code == "ArrowRight") {
      goToNextPage();
    }
  }

  let isScrolling = false;
  const deltaThreshold = 50; // Adjust this value as needed

  document.addEventListener("wheel", function (event) {
    if (
      !isScrolling &&
      (Math.abs(event.deltaY) >= deltaThreshold ||
        Math.abs(event.deltaX) >= deltaThreshold)
    ) {
      isScrolling = true;
      scrollListener(event);
    }
  });

  function scrollListener(event) {
    if (isMobileOrTablet()) {
      return;
    }

    if (Math.abs(event.deltaY) >= deltaThreshold) {
      if (event.deltaY < 0) {
        goToPreviousPage();
      } else if (event.deltaY > 0) {
        goToNextPage();
      }
    } else if (Math.abs(event.deltaX) >= deltaThreshold) {
      if (event.deltaX < 0) {
        goToPreviousPage();
      } else if (event.deltaX > 0) {
        goToNextPage();
      }
    }
    setTimeout(() => {
      isScrolling = false;
    }, 500);
  }

  function isMobileOrTablet() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  function setActivePage(index) {
    const elements = [idee, dispositif, avantages, projets /*, produit */];

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
  // const produit = document.querySelector("#produit");

  nextBtn.addEventListener("click", goToNextPage);
  prevBtn.addEventListener("click", goToPreviousPage);
  idee.addEventListener("click", () => setPage(0));
  dispositif.addEventListener("click", () => setPage(1));
  avantages.addEventListener("click", () => setPage(2));
  projets.addEventListener("click", () => setPage(3));
  // produit.addEventListener("click", () => setPage(4));

  function setPage(index) {
    currentPageIndex = index;
    showPage(currentPageIndex);
    setActivePage(currentPageIndex);
  }
  const smallLogo = document.querySelector(".post-it__small-logo");

  smallLogo.addEventListener("click", () => setPage(0));
});

//carousel

function moveToSelected(element) {
  var selected;
  if (element === "carousel__next") {
    selected = $(".carousel__selected").next();
  } else if (element === "carousel__prev") {
    selected = $(".carousel__selected").prev();
  } else {
    selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("carousel__selected");

  $(prev).removeClass().addClass("carousel__prev");
  $(next).removeClass().addClass("carousel__next");

  $(nextSecond).removeClass().addClass("carousel__next-right-second");
  $(prevSecond).removeClass().addClass("carousel__prev-left-second");

  $(nextSecond).nextAll().removeClass().addClass("carousel__hide-right");
  $(prevSecond).prevAll().removeClass().addClass("carousel__hide-left");
}

// $(document).on("keydown", function (e) {
//   switch (e.which) {
//     case 37: // left
//       moveToSelected("prev");
//       break;

//     case 39: // right
//       moveToSelected("next");
//       break;

//     default:
//       return;
//   }
//   e.preventDefault();
// });

$("#post-it__carousel div").on("click", function () {
  moveToSelected($(this));
});

$("#carousel__prev").on("click", function () {
  moveToSelected("carousel__prev");
});

$("#carousel__next").on("click", function () {
  moveToSelected("carousel__next");
});
