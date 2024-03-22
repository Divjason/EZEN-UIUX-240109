const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.scale(1, 0.7);

// face
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(150, 150, 80, 0, (Math.PI / 180) * 360, false);
ctx.fill();

// eye
ctx.beginPath();
ctx.fillStyle = "white";
ctx.strokeStyle = "green";
ctx.arc(120, 80, 20, 0, (Math.PI / 180) * 360, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 20, 0, (Math.PI / 180) * 360, false);
ctx.fill();
ctx.stroke();

// eye circle (*left)
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(120, 80, 5, 0, (Math.PI / 180) * 360, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 5, 0, (Math.PI / 180) * 360, false);
ctx.fill();

// // eye (*right)
// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.strokeStyle = "green";
// ctx.arc(180, 80, 20, 0, (Math.PI / 180) * 360, false);
// ctx.fill();
// ctx.stroke();

// // eye circle (*right)
// ctx.beginPath();
// ctx.fillStyle = "black";
// ctx.arc(180, 80, 5, 0, (Math.PI / 180) * 360, false);
// ctx.fill();

// mouse
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.arc(150, 150, 50, 0, (Math.PI / 180) * 180, false);
ctx.stroke();
