const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-bar-links");
const serviceDropdown = document.querySelector(".dropdown");
const serviceContainer = document.querySelector(".service-container");
const serviceLinks = document.querySelectorAll(".service-container li a");
const selectBtn = document.querySelector(".select");
const heroCta = document.querySelector(".hero-cta");
const mobileLinks = document.querySelectorAll("nav-links a");
const main = document.querySelector("main");

// functions
// function to toggle visibility

function toggleVisibility(element, show) {
  if (show) {
    element.classList.toggle("active");
  }
}

// When hamburger menu is clicked, display nav links
hamburgerMenu.addEventListener("click", () => {
  toggleVisibility(hamburgerMenu, true);
  toggleVisibility(navLinks, true);
  serviceContainer.classList.remove("active");
  toggleVisibility(gtArrow, false);
  selectBtn.classList.remove("active");
  heroCta.classList.remove("active");
});

// when service is clicked, display container
selectBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  const arrow = e.target;
  const gtArrow = document.querySelector(".arrow");
  toggleVisibility(gtArrow, true);
  toggleVisibility(serviceContainer, true);
  toggleVisibility(selectBtn, true);
  toggleVisibility(heroCta, true);
});

// Remove the navbar when a link is clicked
// Add the button being clicked to this event
mobileLinks.forEach((mobileAnchor) => {
  mobileAnchor.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Remove the navBar when any part of the body is clicked
main.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

// Remove the service bar when a link is clicked
// Add the button being clicked to this event
serviceLinks.forEach((li) => {
  li.addEventListener("click", () => {
    serviceContainer.classList.remove("active");
  });
});

// Remove the service links bar when any part of the body is clicked
main.addEventListener("click", () => {
  serviceContainer.classList.remove("active");
});
