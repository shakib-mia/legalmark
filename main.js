// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import { Autoplay, Navigation, Parallax } from "swiper/modules";

// Navbar

import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    // Toggle between max-h-0 and max-h-[500px] for smooth height transition
    if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
      menu.style.maxHeight = "500px"; // Set a large enough height for smooth transition
    } else {
      menu.style.maxHeight = "0px"; // Collapse the menu
    }
  });
});

// function onYouTubeIframeAPIReady() {

// Call pauseVideo when needed
document.getElementById("video-check").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.getElementById("iframe").src =
      "https://www.youtube.com/embed/xcJtL7QggTI?si=L3-0AFQSyc4sRnWJ";
  } else {
    document.getElementById("iframe").src = "";
  }
});

// lenis smooth scroll

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll(".accordion-header").forEach((button, index) => {
  const accordionItem = button.parentElement;
  const accordionContent = accordionItem.querySelector(".accordion-content");
  const chevronIcon = button.querySelector(".chevron");

  // Set the first accordion to be open on page load
  if (index === 0) {
    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; // Open it
    chevronIcon.style.rotate = "180deg"; // Rotate the chevron for open state
    button.classList.add("bg-secondary");
  }

  button.addEventListener("click", () => {
    const isOpen = accordionContent.style.maxHeight; // Check if it's already open

    // If it's already open, close it
    if (isOpen) {
      accordionContent.style.maxHeight = null; // Close the accordion
      chevronIcon.style.rotate = "0deg"; // Reset chevron rotation
      button.classList.add("bg-secondary");
      // button.classList.add("bg-transparent");
    } else {
      // Close all other open accordions
      document.querySelectorAll(".accordion-content").forEach((content) => {
        content.style.maxHeight = null;
      });
      document.querySelectorAll(".accordion-header").forEach((header) => {
        header.classList.remove("bg-secondary");
        header.classList.add("bg-transparent");
      });
      document.querySelectorAll(".chevron").forEach((icon) => {
        icon.style.rotate = "0deg";
      });

      // Open the clicked accordion
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      chevronIcon.style.rotate = "180deg";
      button.classList.remove("bg-transparent");
      button.classList.add("bg-secondary");
    }
  });
});

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Autoplay, Parallax],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true,
  delay: 1000,
  loop: "true",
});

// Navbar scroll direction tracking logic
const navbar = document.getElementById("navbar");
navbar.style.position = "fixed";
navbar.style.top = `${document.getElementById("social").clientHeight}px`;

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = lenis.scroll || window.pageYOffset; // Using Lenis scroll

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    // console.log(scrollDirection);
    // Hide navbar on scroll down
    if (scrollDirection === "down") {
      navbar.style.top = "-10rem";
      navbar.style.transition = "all 0.5s ease";
    } else {
      if (currentScrollY > document.getElementById("social").clientHeight) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = `${
          document.getElementById("social").clientHeight
        }px`;
        navbar.style.transition = "all 0.5s ease";
      }
    }

    // Box shadow and fixed position on scroll
    if (currentScrollY > 0) {
      navbar.style.boxShadow = "0 0 20px 0 #2B245D21";
      navbar.style.position = "fixed";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.top = `${document.getElementById("social").clientHeight}px`;
    }
  }

  // Listen to scroll events
  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();

document.getElementById("year").innerText = new Date().getFullYear();
