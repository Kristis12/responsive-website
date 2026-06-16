const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const menuTopNav = document.querySelector("#menuTopNav");

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);

function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
}

function closeMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "false");
}
