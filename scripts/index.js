const splash = document.querySelector(".splash");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");

window.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("no-display");
  }, 2000);
});
