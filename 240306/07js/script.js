// 마우스 스크롤을 하던, 손가락 스크롤을 하던
// 스크롤 이벤트 필요!!

const scrollEvent = () => {
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 300) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
};

window.addEventListener("scroll", scrollEvent);

// 마우스 & 손가락
// click : 마우스를 클릭했다가 떼는 순간 이벤트 발생!!
// mousedown & touchstart

// 컴퓨터 혹은 모바일 디바이스는 사용자가 얼만큼 스크롤을 했는지 어떻게 알 수 있을까?

// scrollWidth : 사용자가 스크롤을 할 수 있는 컨텐츠의 전체 총 너비값 = 652px

// clientWidth : 사용자의 눈으로 확인이 가능한 디바이스 매체상의 너비값 = 390px

// 스크롤이 가능한 영역의 너비 = 262px

// 사용자가 처음으로 스크롤을 하기 위해서 찍은 지점
let startX = 0;

// 사용자가 스크롤을 한 이후의 지점
let nowX = 0;

// 사용자가 스크롤을 통해서 이동한 만큼의 너비
let listX = 0;

// 사용자가 더이상 스크롤을 사용하지 않을 경우의 마지막 종료지점
let endX = 0;

// 두번째로 스크롤을 움직이지고 할 때, 세팅되어야 하는 위치값
// listX + nowX - startX

const hashContent = document.querySelector(".hashcontent");
const listScrollWidth = hashContent.scrollWidth + 294;
const listClientWidth = hashContent.clientWidth;
const minus = listClientWidth - listScrollWidth;

console.log(listScrollWidth);
console.log(listClientWidth);
console.log(minus);

const getClientX = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  console.log(window.getComputedStyle(hashContent).transform);
  return parseInt(
    window.getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  console.log("종착지점: ", nowX);
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;
  }

  window.removeEventListener("mousedown", onScrollStart);
  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousemove", onScrollMove);
  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mouseup", onScrollEnd);
  window.removeEventListener("touchend", onScrollEnd);

  setTimeout(() => {
    bindEvents();
    hashContent.style.transition = "";
  }, 100);
};

const onScrollStart = (e) => {
  startX = getClientX(e);
  console.log("스타트지점: ", startX);
  window.addEventListener("mousemove", onScrollMove);
  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mouseup", onScrollEnd);
  window.addEventListener("touchend", onScrollEnd);
};

const bindEvents = () => {
  hashContent.addEventListener("mousedown", onScrollStart);
  hashContent.addEventListener("touchstart", onScrollStart);
};

bindEvents();
