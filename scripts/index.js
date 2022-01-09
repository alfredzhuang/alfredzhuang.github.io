const splash = document.querySelector(".splash");
const navbar = document.querySelector("#navbar");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");

window.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("no-display");
    navbar.classList.remove("hidden");
    about.classList.remove("hidden");
  }, 2000);
});

function renderAbout() {
  about.classList.remove("hidden");
  projects.classList.add("hidden");
}

function renderProjects() {
  about.classList.add("hidden");
  projects.classList.remove("hidden");
}
