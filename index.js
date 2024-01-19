const modalBtn = document.querySelectorAll(".js-modal");
const modalBackdrop = document.querySelector(".modal-backdrop");
const closeBtn = document.querySelector(".modal-close-btn");
const menu = document.querySelector(".menu-open-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCloseBtn = document.querySelector(".menu-close-btn");

modalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalBackdrop.classList.add("is-open");
  });
});

closeBtn.addEventListener("click", () => {
  modalBackdrop.classList.remove("is-open");
});

menu.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

menuCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});
