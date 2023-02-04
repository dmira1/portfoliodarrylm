const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const navList = document.getElementById("navList");
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("change");
  nav.classList.toggle("change");
  navList.classList.toggle("change");
});