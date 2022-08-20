const splash = document.querySelector(".splash");
const navbar = document.querySelector("#navbar");
const about = document.querySelector(".about-container");
const projects = document.querySelector(".projects-container");
const resume = document.querySelector(".resume-container");
const footer = document.querySelector("#footer");
const navbarAbout = document.querySelector("#about");
const navbarProjects = document.querySelector("#projects");
const navbarResume = document.querySelector("#resume");

window.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("no-display");
    splash.style.top = "-100vh";
    navbar.classList.remove("hidden");
    about.classList.remove("remove");
    about.classList.add("fade-in");
    footer.classList.remove("hidden");
    navbarAbout.classList.add("selected");
  }, 2000);
});

function renderAbout() {
  about.classList.remove("remove");
  about.classList.add("fade-in");
  navbarAbout.classList.add("selected");
  resume.classList.add("remove");
  navbarResume.classList.remove("selected");
  projects.classList.add("remove");
  navbarProjects.classList.remove("selected");
}

function renderResume() {
  about.classList.add("remove");
  navbarAbout.classList.remove("selected");
  resume.classList.remove("remove");
  resume.classList.add("fade-in");
  navbarResume.classList.add("selected");
  projects.classList.add("remove");
  navbarProjects.classList.remove("selected");
}

function renderProjects() {
  about.classList.add("remove");
  navbarAbout.classList.remove("selected");
  resume.classList.add("remove");
  navbarResume.classList.remove("selected");
  projects.classList.remove("remove");
  projects.classList.add("fade-in");
  navbarProjects.classList.add("selected");
}

function expand(iconId, contentId) {
  const icon = document.querySelector(`#${iconId}`);
  const content = document.querySelector(`#${contentId}`);
  if (content.classList.contains("remove")) {
    content.classList.remove("remove");
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-up");
  } else {
    content.classList.add("remove");
    icon.classList.add("fa-angle-down");
    icon.classList.remove("fa-angle-up");
  }
}
