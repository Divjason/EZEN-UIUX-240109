const elements = document.querySelectorAll("*");
for (let element of elements) {
  element.addEventListener("click", (e) => {
    console.log(
      `e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`
    );
  });
}
