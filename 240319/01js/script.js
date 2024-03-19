// 마우스의 움직에 따라서 좌표값이 변경되고 있다는 사실을 확인해야한다!!

// window 객체 안에 포함되어있는 이벤트

// clientX : 74 : 스크롤을 인식하지 않은 상태에서 단순히 웹브라우저상의 마우스의 위치값을 계속 반환

// pageX : 74
// => 웹 페이지를 스크롤하게 되면 값이 바뀜!!
// if, 스크롤이 발생될 수 밖에 없는 페이지안에서 스크롤이 내려가는 상황에서도 나의 x 혹은 y좌표값을 찾아오고 싶다면, 반드시 pageX 속성값을 사용해야한다!!

// screenX : -823

// 현재 마우스가 위치해있는 좌표값
// 이동 후 마우스가 위치해있는 좌표값
// 현재 좌표값 => 이동 후 좌표값 속도 비율 =>  1 : 1

const cursorItem = document.querySelector(".cursorItem");
const circle = cursorItem.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");

let x = 0,
  y = 0;

let targetX = 0,
  targetY = 0;

const speed = 0.03;

buttonAll.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.3)";
  });
  button.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);
};

loop();
