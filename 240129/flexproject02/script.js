const btn = document.querySelector(".menu-toggle-btn");
const gnb = document.querySelector(".gnb");

btn.addEventListener("click", () => {
  gnb.classList.toggle("active");
});
