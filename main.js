document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navMenu");
  const navButtons = document.querySelector(".nav-buttons");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navButtons.classList.toggle("active");
  });
});
