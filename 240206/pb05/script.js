const items = document.querySelectorAll(".navi li");
const photo = document.querySelector(".photo");

items.forEach((item) => {
  item.addEventListener("mouseover", function () {
    const changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = `url(${changeImage})`;
  });
  item.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = "";
  });
});
