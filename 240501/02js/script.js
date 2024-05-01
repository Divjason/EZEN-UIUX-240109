const trigger = document.querySelector(".trigger");
const modal = document.querySelector("#modal-notice");
const closeBtn = document.querySelector(".btn-close");

trigger.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});
