'use strict';

/**
 * Mobile Navbar Toggle Logic
 */
const navbar = document.querySelector("[data-navbar]");
const navOpenBtn = document.querySelector(".nav-open-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");
const navLinks = document.querySelectorAll("[data-nav-link]");

// Open Mobile Menu when Hamburger lines are clicked
if (navOpenBtn && navbar) {
  navOpenBtn.addEventListener("click", function () {
    navbar.classList.add("active");
  });
}

// Close Mobile Menu when the "X" button is clicked
if (navCloseBtn && navbar) {
  navCloseBtn.addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

// Automatically close the mobile menu drawer when any link (Home, Diet, Workout) is clicked
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navbar.classList.remove("active");
  });
});

/**
 * Header Dynamic Scroll Elevation & Back to Top Button
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    if (header) header.classList.add("active");
    if (backTopBtn) backTopBtn.classList.add("active");
  } else {
    if (header) header.classList.remove("active");
    if (backTopBtn) backTopBtn.classList.remove("active");
  }
});

/**
 * AUTH MODAL DIALOG INTERACTIVE FUNCTIONALITY
 */
const authModal = document.getElementById("authModal");
const closeModalBtn = document.querySelector(".close-modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");

// TARGETING YOUR ORIGINAL HTML BUTTONS:
// Selects "Start now" in the header and "Get Started" in the hero section
const startNowBtn = document.querySelector(".header .btn-secondary");
const getStartedBtn = document.querySelector(".hero-content .btn-primary");

// Group them into an array to apply the click event listeners
const triggerButtons = [startNowBtn, getStartedBtn];

triggerButtons.forEach(btn => {
  if (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevents page reload jump behaviors
      if (authModal) {
        authModal.classList.add("open");
        document.body.style.overflow = "hidden"; // Locks background scrolling
      }
    });
  }
});

// Function utility to close the modal
const closeAuthModal = function () {
  if (authModal) {
    authModal.classList.remove("open");
    document.body.style.overflow = ""; // Restores standard vertical scrolling
  }
};

if (closeModalBtn) closeModalBtn.addEventListener("click", closeAuthModal);
if (modalOverlay) modalOverlay.addEventListener("click", closeAuthModal);

// Close modal on 'Escape' keypress action
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeAuthModal();
  }
});