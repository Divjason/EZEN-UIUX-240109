const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;
console.log(imageAll, totalNum);

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  console.log(scrollNum);
  if (scrollNum < 2013) {
    imageAll.forEach((item, index) => {
      item.style.transform = `perspective(400px) translate3d(0, 0, ${
        scrollNum / (2 * (totalNum - index))
      }px)`;
    });
  }
});
