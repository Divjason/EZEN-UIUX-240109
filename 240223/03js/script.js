// const newP = document.createElement("p");
// const textNode = document.createTextNode("Typescript");
// newP.appendChild(textNode);

// document.body.appendChild(newP);

// const orderButton = document.querySelector("#order");
// const title = document.querySelector("#container h2");
// const orderInfo = document.querySelector("#orderInfo");

// orderButton.addEventListener(
//   "click",
//   () => {
//     const newP = document.createElement("p");
//     const textNode = document.createTextNode(title.innerText);
//     newP.appendChild(textNode);
//     newP.style.fontSize = "1.2rem";
//     newP.style.color = "crimson";
//     orderInfo.appendChild(newP);
//   },
//   { once: true }
// );

const newImg = document.createElement("img");
const srcNode = document.createAttribute("src");
srcNode.value =
  "https://img.khan.co.kr/news/2023/01/02/news-p.v1.20230102.1f95577a65fc42a79ae7f990b39e7c21_P1.png";
newImg.setAttributeNode(srcNode);
document.body.appendChild(newImg);
console.log(newImg);
