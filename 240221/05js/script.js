const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const container = document.querySelector(".container");

const openFnc = () => {
  openButton.style.display = "none";
  container.style.display = "flex";
};

const closeFnc = () => {
  container.style.display = "none";
  openButton.style.display = "block";
};

openButton.onclick = openFnc;
closeButton.onclick = closeFnc;
