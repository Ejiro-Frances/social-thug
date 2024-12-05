const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-bar-links");

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
});
