new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem) => {
    if (new_elem.index == 2) {
      console.log("section2 Hello!");
      sec2();
    }
    if (old_elem.index == 2) {
      console.log("section2 Good Bye!");
      sec2_reset();
    }
  },
});

const navBtn = document.querySelector("#nav_icon");
const nav = document.querySelector(".nav");
const sec2Title = document.querySelector("#sec2 h1.title");
const sec2Slider = document.querySelector("#sec2 .slider_wrap");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  nav.classList.toggle("active");
});

const sec2 = () => {
  sec2Title.style.cssText = `opacity: 1; transform: translateX(50px);`;
  sec2Slider.style.cssText = `opacity: 1; transform: translateX(-50px);`;
};

const sec2_reset = () => {
  sec2Title.style.cssText = `opacity: 0; transform: translateX(-50px);`;
  sec2Slider.style.cssText = `opacity: 0; transform: translateX(50px);`;
};
