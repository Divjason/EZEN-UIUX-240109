const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;
const subPageImage = document.querySelector(".subPage .parallaxImage");

let scrollNum = 0;
let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  imageAll.forEach((item, index) => {
    if (index < 4) {
      item.style.transform = `translateY(${
        -scrollNum / (5 * (totalNum - index))
      }px)`;
    }
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  imageAll[4].style.transform = `scale(1.2) translate(${-targetX / 50}px, ${
    -scrollNum / (5 * (totalNum - 4))
  }px)`;
  imageAll[5].style.transform = `scale(1.2) translate(${-targetX / 20}px, ${
    -scrollNum / (5 * (totalNum - 5))
  }px)`;
  window.requestAnimationFrame(loop);
};

loop();
