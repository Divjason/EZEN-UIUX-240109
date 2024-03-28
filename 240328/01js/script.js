const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// let img = new Image();
// img.onload = () => {
//   //drawImage함수 : canvas영역안에 이미지를 넣고자!!
//   //3개의 매개변수 : 이미지, x축, y축, 가로, 세로
//   // ctx.drawImage(img, 0, 0, 300, 200);
//   // ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// };
// img.src = "./bird.jpg";

// ctx.beginPath();
// ctx.arc(300, 200, 150, 0, Math.PI * 2, false);
// ctx.clip();

/*
이미지를 일부분만 나타나게 하는 방법
drawImage(img, 현재 캔버스를 기준으로 x, y축, w, h, 현재 캔버스를 기준으로 x, y축, w, h)
*/

ctx.beginPath();
ctx.moveTo(80, 100);
ctx.lineTo(260, 100);
ctx.lineTo(120, 250);
ctx.lineTo(170, 30);
ctx.lineTo(220, 250);

ctx.closePath();

ctx.stroke();
