// const tsNode = document.createElement("p");
// const tsTextNode = document.createTextNode("Typescript");
// tsNode.appendChild(tsTextNode);

// const basisNode = document.querySelectorAll("p")[0];
// console.log(basisNode);

// document.body.insertBefore(tsNode, basisNode);

const heading = document.querySelector("h1");

heading.addEventListener("click", () => {
  heading.remove();
});
