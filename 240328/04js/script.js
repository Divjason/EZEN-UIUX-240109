const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

const canvasOffsetY = canvas.offsetTop;
console.log(canvasOffsetY);

const ctx = canvas.getContext("2d");

let isDrawing = false;
let startX;
let startY;
let lineWidth = 2;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) {
    return;
  }
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});

toolbar.addEventListener("click", (e) => {
  if (e.target.id === "reset") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

toolbar.addEventListener("change", (e) => {
  if (e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "lWidth") {
    lineWidth = e.target.value;
  }
});
