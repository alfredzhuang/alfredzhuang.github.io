const splash = document.querySelector(".splash");
const navbar = document.querySelector(".navbar");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");

window.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("no-display");
    navbar.classList.remove("hidden");
    about.classList.remove("remove");
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
