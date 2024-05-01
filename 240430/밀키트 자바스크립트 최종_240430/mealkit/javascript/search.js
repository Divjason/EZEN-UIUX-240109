const allClear = document.querySelector(".btn-all-clear");
const searchItems = document.querySelector(".search-recent .items");

allClear.addEventListener("click", () => {
  searchItems.style.display = "none";
});

const eachItems = document.querySelectorAll(".search-recent .btn-clear");

eachItems.forEach((item) => {
  item.addEventListener("click", function () {
    this.parentNode.style.display = "none";
  });
});
