const items = document.querySelectorAll("article");
for (let item of items) {
  item.addEventListener("mouseover", (e) => {
    e.currentTarget.querySelector("video").play();
  });
  item.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });
}
