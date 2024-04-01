const nav_btn = document.querySelector("#nav_icon");
const nav = document.querySelector(".nav");

// nav
nav_btn.addEventListener("click", () => {
  nav_btn.classList.toggle("active");
  nav.classList.toggle("active");
});

// slider
const s_Left = document.querySelector(".slide_btn.left");
const s_Right = document.querySelector(".slide_btn.right");
const s_Icons = document.querySelectorAll(".slide_icons li");
const s_Slider = document.querySelectorAll(".sec2_slider li");
const Bg = document.querySelector("#sec2");

const s_reset = () => {
  s_Slider.forEach((elem, idx) => {
    s_Slider[idx].classList.remove("on");
    s_Icons[idx].classList.remove("active");
  });
};

s_Icons.forEach((li) => {
  li.addEventListener("click", (e) => {
    const target = e.target.dataset.index;
    console.log(typeof target);
    s_reset();
    // if ((li.tagName = "LI")) {
    //   for (let i = 0; i < s_Icons.length; i++) {
    //     if (target == i) {
    //       s_Slider[i].classList.add("on");
    //       s_Icons[i].classList.add("active");
    //       Bg.style.backgroundImage = `url(./img/sec2_bg_${i}.png)`;
    //     }
    //   }
    // }
    for (let i = 0; i < s_Icons.length; i++) {
      if (target == i) {
        s_Slider[i].classList.add("on");
        s_Icons[i].classList.add("active");
        Bg.style.backgroundImage = `url(./img/sec2_bg_${i}.png)`;
      }
    }
  });
});

const next = (e) => {
  e.preventDefault();
  const crtSlide = document.querySelector(".sec2_slider li.on");
  let i = crtSlide.dataset.index;
  s_reset();
  i++;
  if (i >= s_Slider.length) {
    i = 0;
  }
  s_Slider[i].classList.add("on");
  s_Icons[i].classList.add("active");
  Bg.style.backgroundImage = `url(./img/sec2_bg_${i}.png)`;
};

s_Right.addEventListener("click", next);

const prev = (e) => {
  e.preventDefault();
  const crtSlide = document.querySelector(".sec2_slider li.on");
  let i = crtSlide.dataset.index;
  s_reset();
  i--;
  if (i < 0) {
    i = s_Slider.length - 1;
  }
  s_Slider[i].classList.add("on");
  s_Icons[i].classList.add("active");
  Bg.style.backgroundImage = `url(./img/sec2_bg_${i}.png)`;
};

s_Left.addEventListener("click", prev);

// anime
const sec0 = () => {
  anime({
    targets: ".svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 4000,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
};

const sec1 = () => {
  const tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: ".g01",
    height: "80%",
  })
    .add({
      targets: ".g02",
      height: "70%",
    })
    .add({
      targets: ".g03",
      height: "80%",
    })
    .add({
      targets: ".g04",
      height: "85%",
    });
};

const sec1_reset = () => {
  anime({
    targets: ".gage_in",
    height: "0%",
  });
};

const sec2 = () => {
  const tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: "#sec2 h1",
    opacity: 1,
    translateY: 50,
  }).add({
    targets: ".slider_wrap",
    opacity: 1,
    translateY: 50,
  });
};

// fullpage
new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem) => {
    if (new_elem.index === 0) {
      sec0();
    }
    if (new_elem.index === 1) {
      sec1();
    }
    if (old_elem.index === 1) {
      sec1_reset();
    }
    if (new_elem.index === 2) {
      sec2();
    }
  },
});
