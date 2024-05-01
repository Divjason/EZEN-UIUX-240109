const frontSlider = document.querySelector(".frontSlider");
const pics = [
  "front-slider-01.jpg",
  "front-slider-02.jpg",
  "front-slider-03.jpg",
];
frontSlider.style.backgroundImage = `url(../images/${pics[0]})`;

const arrows = document.querySelectorAll(".arrow");

let i = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }

    frontSlider.style.backgroundImage = `url(../images/${pics[i]})`;
  });
});
