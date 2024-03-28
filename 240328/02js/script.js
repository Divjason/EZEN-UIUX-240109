// 도형을 만들고 색상을 부여할 때, 투명도 정의하는 방법 2가지를 학습!!!

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.globalAlpha = 0.3;

// ctx.fillStyle = "rgb(255, 0, 0, 0.2)";
// ctx.fillRect(50, 50, 100, 50);
// ctx.fillStyle = "rgb(255, 255, 0, 0.4)";
// ctx.fillRect(150, 50, 100, 50);
// ctx.fillStyle = "rgb(0, 0, 255, 0.8)";
// ctx.fillRect(250, 50, 100, 50);
// ctx.fillStyle = "rgb(0, 255, 0, 1)";
// ctx.fillRect(350, 50, 100, 50);

// 선형그라디언트 && 원형그라디언트
// 리니어그라디언트 && 래디얼그라디언트

// let linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#eee");

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

// 2개의 원이 필요함
// 먼저 입력되는 수치값 내부 원
// 나중 입력되는 수치값 외부 원
let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fill();
