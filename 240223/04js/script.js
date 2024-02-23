const today = new Date();
const hrs = today.getHours();

const container = document.querySelector("#container");
const newImg = document.createElement("img");
newImg.src = hrs < 12 ? "./images/morning.jpg" : "./images/afternoon.jpg";
container.appendChild(newImg);
