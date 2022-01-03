const menuBtn = document.querySelector(".menu-btn");
const burgerMenu = document.querySelector(".burger-menu");
const body = document.querySelector("main");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    burgerMenu.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    burgerMenu.classList.remove("open");
    menuOpen = false;
  }
});

body.addEventListener("click", () => {
  if (menuOpen) {
    menuBtn.classList.remove("open");
    burgerMenu.classList.remove("open");
    menuOpen = false;
  }
});
