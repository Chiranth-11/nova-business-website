
/* 1. Automatically update the footer year */
const yearElement = document.getElementById("current-year");

yearElement.textContent = new Date().getFullYear();


/* 2. Open and close the mobile menu */
const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("is-open");

  const isOpen = navLinks.classList.contains("is-open");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "Close ✕" : "Menu ☰";
});


/* 3. Close the menu after clicking a navigation link */
const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu ☰";
  });
});


/* 4. Handle the contact form */
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please complete all fields.";
    return;
  }

  formStatus.textContent =
    "Thank you, " + name +
    "! Your form works, but message delivery is not connected yet.";

  contactForm.reset();
});
