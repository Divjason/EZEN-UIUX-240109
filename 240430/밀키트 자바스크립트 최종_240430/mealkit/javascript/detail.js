// main slider
const goodSlider = document.querySelector(".goods-detail-slider");
const pagers = document.querySelectorAll(".pagers span");

const pics = [
  "goods-detail-01.jpg",
  "goods-detail-02.jpg",
  "goods-detail-03.jpg",
  "goods-detail-04.jpg",
];

goodSlider.style.backgroundImage = `url(../images/${pics[0]})`;

let index = 0;
const rotation = () => {
  index = (index + 1) % pics.length;
  pagers.forEach((pager, idx) => {
    if (index === idx) {
      pager.classList.add("active");
      goodSlider.style.backgroundImage = `url(../images/${pics[index]})`;
    } else {
      pager.classList.remove("active");
    }
    pager.addEventListener("click", function () {
      pagers.forEach((pager) => {
        pager.classList.remove("active");
      });
      this.classList.add("active");
      goodSlider.style.backgroundImage = `url(../images/${pics[idx]})`;
    });
  });
};

setInterval(rotation, 3000);

// bottom accordion
const goodsTitles = document.querySelectorAll(".goods-accordion .title");

goodsTitles.forEach((title) => {
  title.addEventListener("click", function () {
    const nextSibling = this.nextElementSibling;
    goodsTitles.forEach((otherTitle) => {
      if (otherTitle !== this) {
        otherTitle.nextElementSibling.style.display = "none";
      }
    });

    if (nextSibling.style.display === "block") {
      nextSibling.style.display = "none";
    } else {
      nextSibling.style.display = "block";
    }
  });
});
