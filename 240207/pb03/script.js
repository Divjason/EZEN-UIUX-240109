const trigger = document.querySelector(".trigger");
const modal_gnb = document.querySelector(".modal-gnb");

trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  if (modal_gnb.style.display === "none" || modal_gnb.style.display === "") {
    modal_gnb.style.display = "block";
  } else {
    modal_gnb.style.display = "none";
  }
});
