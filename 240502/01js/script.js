const titles = document.querySelectorAll(".accordion .title");
const contents = document.querySelectorAll(".accordion .content");

contents[0].style.display = "block";

titles.forEach((title) => {
  title.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const allTitles = this.parentNode.querySelectorAll(".accordion .title");
    const allContents = this.parentNode.querySelectorAll(".accordion .content");

    allContents.forEach((item) => {
      if (item !== content) {
        item.style.display = "none";
      }
    });

    content.style.display =
      content.style.display === "block" ? "none" : "block";
    this.classList.toggle("active");

    allTitles.forEach((item) => {
      if (item !== title) {
        item.classList.remove("active");
      }
    });
  });
});
