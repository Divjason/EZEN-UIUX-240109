const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;
console.log(slideCount);
const slideWidth = 200;
const slideMargin = 30;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Initial Index Value
let currentIdx = 0;

// li style setting
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  console.log(newSlideCount);
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.style.width = newWidth;
};

const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};

makeClone();

const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;
  console.log(currentIdx, slideCount);
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
};

nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

// auto slide

const autoSlide = () => {
  timer = setInterval(() => {
    moveSlide(currentIdx + 1);
  }, 3000);
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
};

slides.addEventListener("mouseenter", stopSlide);

slides.addEventListener("mouseleave", autoSlide);
