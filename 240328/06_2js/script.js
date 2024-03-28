const staggerWrap = document.querySelector("ul");
const fragment = document.createDocumentFragment();

const grid = [9, 3];
const [col, row] = grid;
const allElem = col * row;

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  fragment.appendChild(li);
}

staggerWrap.appendChild(fragment);

anime({
  targets: "ul li",
  easing: "linear",
  duration: 1000,
  scale: anime.stagger([0.5, 1], { grid: [9, 3], axis: "y" }),
  delay: anime.stagger(100, { grid: [9, 3], from: "center" }),
  direction: "alternate",
  loop: true,
});
