// const container = document.querySelector("#container");
// const arrows = document.querySelectorAll(".arrow");

// const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];

// const newVideo = document.createElement("video");
// const srcVideo = document.createAttribute("src");
// const widthVideo = document.createAttribute("width");
// const autoplayVideo = document.createAttribute("autoplay");

// srcVideo.value = `./videos/${videos[0]}`;
// widthVideo.value = "700";
// newVideo.setAttributeNode(srcVideo);
// newVideo.setAttributeNode(widthVideo);
// newVideo.setAttributeNode(autoplayVideo);
// container.appendChild(newVideo);

// let i = 0;
// arrows.forEach((arrow) => {
//   arrow.addEventListener("click", (e) => {
//     if (e.target.id === "left") {
//       i--;
//       if (i < 0) {
//         i = videos.length - 1;
//       }
//     } else if (e.target.id === "right") {
//       i++;
//       if (i >= videos.length) {
//         i = 0;
//       }
//     }
//     srcVideo.value = `./videos/${videos[i]}`;
//   });
// });

const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");

const imgs = ["iu-1.jpg", "iu-2.jpg", "iu-3.jpg", "iu-4.jpg"];

const img = document.createElement("img");
const src = document.createAttribute("src");
const imgWidth = document.createAttribute("width");

const imgSrc = `./imgs/${imgs[0]}`;
src.value = imgSrc;
imgWidth.value = "700";
img.setAttributeNode(imgWidth);
img.setAttributeNode(src);
container.appendChild(img);

let i = 0;
const changeImg = (direction) => {
  if (direction === "next") {
    i++;
    if (i >= imgs.length) {
      i = 0;
    }
  } else if (direction === "prev") {
    i--;
    if (i < 0) {
      i = imgs.length - 1;
    }
  }
  src.value = `./imgs/${imgs[i]}`;
};

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const direction = e.target.id === "left" ? "prev" : "next";
    changeImg(direction);
  });
});

let timer = undefined;

const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      changeImg("next");
    }, 3000);
  }
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

container.addEventListener("mouseenter", () => {
  stopSlide();
});

container.addEventListener("mouseleave", () => {
  autoplaySlide();
});
