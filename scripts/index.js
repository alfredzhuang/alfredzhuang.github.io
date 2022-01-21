const splash = document.querySelector(".splash");
const navbar = document.querySelector("#navbar");
const about = document.querySelector(".about-container");
const projects = document.querySelector(".projects-container");
const footer = document.querySelector("#footer");

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
  projects.classList.add("remove");
}

function renderProjects() {
  about.classList.add("remove");
  projects.classList.remove("remove");
  projects.classList.add("fade-in");
}
