const btn = document.querySelector(".menu_toggle_btn");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
