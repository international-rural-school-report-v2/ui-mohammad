const hamburgerButton = document.querySelector(".hamburger-button");
const nav = document.querySelector("nav");
const navUnderlay = document.querySelector(".nav-underlay");

hamburgerButton.addEventListener("click", event => {
  event.stopPropagation();
  toggleExpandNav ()
});

navUnderlay.addEventListener("click", event => {
  forceContractNav ();
});

nav.addEventListener("click", event => {
  forceContractNav ();
});

function toggleExpandNav () {
  nav.classList.toggle("expandedNav");
  navUnderlay.classList.toggle("expandedNavUnderlay");
}

function forceContractNav () {
  nav.classList.toggle("expandedNav", false);
  navUnderlay.classList.toggle("expandedNavUnderlay", false);
}