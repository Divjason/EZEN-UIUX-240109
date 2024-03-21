const buttons = document.querySelectorAll("label");
const tabItems = document.querySelector(".tabs .items");
const h1 = tabItems.querySelectorAll("h1");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    tabItems.style.left = `-${index * 100}%`;

    buttons.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");

    h1.forEach((title) => title.classList.remove("active"));
    h1[index].classList.add("active");
  });
});
