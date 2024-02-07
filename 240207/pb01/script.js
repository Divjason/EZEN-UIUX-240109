const titles = document.querySelectorAll(".title");
const descs = document.querySelectorAll(".desc");
const image = document.querySelector(".image img");

titles.forEach((title) => {
  title.addEventListener("click", function () {
    function siblings(e) {
      const children = e.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }
    siblings(this);
    this.classList.add("active");
    this.nextElementSibling.classList.add("active");
    const dataImage = this.getAttribute("data-image");
    image.src = `${dataImage}`;
  });
});
