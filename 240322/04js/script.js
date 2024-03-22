const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const audios = frame.querySelectorAll("audio");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

// 개별 article의 각도 정의
const deg = 45;

// 뮤직패널 이미지 인덱스 값 정의
let i = 0;
const len = lists.length - 1;

// 프레임 내 뮤직패널 이동 인덱스 값 정의
let num = 0;

// 프레임 내 뮤직패널 스타일 변경 값 정의
let active = 0;

lists.forEach((list) => {
  const pic = list.querySelector(".pic");
  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url(./img/member${i + 1}.jpg)`;
  i++;

  const pause = list.querySelector(".pause");
  const play = list.querySelector(".play");
  const load = list.querySelector(".load");

  play.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").play();
  });

  pause.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").pause();
  });

  load.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
  });
});

const activation = (active, lists) => {
  lists.forEach((list) => {
    list.classList.remove("on");
  });
  lists[active].classList.add("on");
};

const initMusic = () => {
  audios.forEach((audio) => {
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
  });
};

prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === 0 ? (active = len) : active--;
  activation(active, lists);
});
next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === len ? (active = 0) : active++;
  activation(active, lists);
});
