const openSearch = document.querySelector(".open-search");
const closeSearch = document.querySelector(".close-search");
const modalSearch = document.querySelector(".modal-search");

openSearch.addEventListener("click", () => {
  modalSearch.classList.add("active");
});

closeSearch.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});

const searchBar = document.querySelector(".field input[type=search]");

searchBar.addEventListener("focus", function () {
  const element = this.parentElement.parentElement.nextElementSibling;
  element.style.display = "block";
});

searchBar.addEventListener("blur", function () {
  const element = this.parentElement.parentElement.nextElementSibling;
  element.style.display = "none";
});
