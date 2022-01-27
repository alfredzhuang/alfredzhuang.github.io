const splash = document.querySelector(".splash");
const navbar = document.querySelector("#navbar");
const about = document.querySelector(".about-container");
const projects = document.querySelector(".projects-container");
const footer = document.querySelector("#footer");
const navbarAbout = document.querySelector("#about");
const navbarProjects = document.querySelector("#projects");

window.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("no-display");
    splash.style.top = "-100vh";
    navbar.classList.remove("hidden");
    about.classList.remove("remove");
    about.classList.add("fade-in");
    footer.classList.remove("hidden");
  }, 2000);
});

function renderAbout() {
  about.classList.remove("remove");
  about.classList.add("fade-in");
  navbarAbout.classList.add("selected");
  projects.classList.add("remove");
  navbarProjects.classList.remove("selected");
}

function renderProjects() {
  about.classList.add("remove");
  navbarAbout.classList.remove("selected");
  projects.classList.remove("remove");
  projects.classList.add("fade-in");
  navbarProjects.classList.add("selected");
}
