const nav_btn = document.querySelector("#nav_icon");
const nav = document.querySelector(".nav");

// nav
nav_btn.addEventListener("click", () => {
  nav_btn.classList.toggle("active");
  nav.classList.toggle("active");
});

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
  },
});
