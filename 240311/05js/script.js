const sliderWrapper = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const pager = document.querySelector(".pager");
// const pagerBtn = document.querySelectorAll(".pager span");

const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");

// slide count
const slideCount = slides.length;
for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
}

// slide height
let topHeight = 0;

const calculateTallestSlide = () => {
  for (let i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }
  sliderWrapper.style.height = `${topHeight}px`;
  sliderContainer.style.height = `${topHeight}px`;
};

calculateTallestSlide();

let currentIndex = 0;

const updateNav = () => {
  if (currentIndex === 0) {
    navPrev.classList.add("disabled");
  } else {
    navPrev.classList.remove("disabled");
  }

  if (currentIndex === slideCount - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }
};

// pager making
let pagerHTML = "";

for (let i = 0; i < slideCount; i++) {
  pagerHTML += `<span data-idx=${i}>${i + 1}</span>`;
  pager.innerHTML = pagerHTML;
}

const pagerBtn = document.querySelectorAll(".pager span");

const gotoSlide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  currentIndex = i;
  // updateNav();

  for (let i = 0; i < pagerBtn.length; i++) {
    pagerBtn[i].classList.remove("active");
  }
  pagerBtn[i].classList.add("active");
};

navPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    gotoSlide(currentIndex - 1);
  } else {
    gotoSlide(slideCount - 1);
  }
});

navNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < slideCount - 1) {
    gotoSlide(currentIndex + 1);
  } else {
    gotoSlide(0);
  }
});

// pager slider moving
for (let i = 0; i < pagerBtn.length; i++) {
  pagerBtn[i].addEventListener("click", (e) => {
    const pagerNum = e.target.innerText - 1;
    gotoSlide(pagerNum);
  });
}

gotoSlide(0);

// auto slide function

const startAutoSlide = () => {
  timer = setInterval(() => {
    const nextIdx = (currentIndex + 1) % slideCount;
    gotoSlide(nextIdx);
  }, 3000);
};

startAutoSlide();

sliderWrapper.addEventListener("mouseenter", () => {
  clearInterval(timer);
});

sliderWrapper.addEventListener("mouseleave", () => {
  startAutoSlide();
});
