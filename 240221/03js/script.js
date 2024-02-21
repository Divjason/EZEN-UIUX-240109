const viewBtn = document.querySelector("#view");
const detail = document.querySelector("#detail");

viewBtn.onclick = function () {
  detail.classList.toggle("hidden");
};
