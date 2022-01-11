const splash = document.querySelector(".splash");
const navbar = document.querySelector("#navbar");
const about = document.querySelector(".about-container");
const projects = document.querySelector(".projects-container");
const footer = document.querySelector("#footer");

window.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("no-display");
    navbar.classList.remove("hidden");
    about.classList.remove("remove");
    footer.classList.remove("hidden");
  }, 2000);
});

function renderAbout() {
  about.classList.remove("remove");
  projects.classList.add("remove");
}

function renderProjects() {
  about.classList.add("remove");
  projects.classList.remove("remove");
}
