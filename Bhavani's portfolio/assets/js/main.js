/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  reset: true,
});

sr.reveal(
  ".home__data, .about__img, .skills__subtitle, .skills__text, .education, .degree",
  {}
);
sr.reveal(
  ".home__img, .about__subtitle, .about__text, .skills__img, .education, .degree",
  {
    delay: 400,
  }
);
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
// Get modal element
const modal = document.getElementById("responseModal");
const closeButton = document.getElementsByClassName("close")[0];

// Show the modal when button is clicked
document
  .getElementById("get-in-touch-button")
  .addEventListener("click", function () {
    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
    } else {
      modal.style.display = "block"; // Show the modal
    }
  });

// Close the modal when the close button is clicked
closeButton.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when clicking outside of the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Get the dark mode toggle button and the icon
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");
const body = document.body;

// Check if the user has a previously saved theme in localStorage
let savedTheme = localStorage.getItem("theme");

// Apply the saved theme (if any) on page load
if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  darkModeIcon.classList.replace("bx-moon", "bx-sun");
} else {
  body.classList.remove("dark-theme");
  darkModeIcon.classList.replace("bx-sun", "bx-moon");
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  // Check if dark mode is active
  if (body.classList.contains("dark-theme")) {
    // Switch icon to sun for dark mode
    darkModeIcon.classList.replace("bx-moon", "bx-sun");
    // Save theme to localStorage
    localStorage.setItem("theme", "dark");
  } else {
    // Switch icon to moon for light mode
    darkModeIcon.classList.replace("bx-sun", "bx-moon");
    // Save theme to localStorage
    localStorage.setItem("theme", "light");
  }
});
