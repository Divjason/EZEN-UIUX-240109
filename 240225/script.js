window.addEventListener("scroll", () => {
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  // console.log(scrollY);
  if (scrollY > 300) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
});

// 요소 & 사이즈
const hashContent = document.querySelector(".hashcontent");
// console.log(hashContent);
const listScrollWidth = hashContent.scrollWidth;
const listClientWidth = hashContent.clientWidth;
console.log(listScrollWidth);
console.log(listClientWidth);
const minus = listClientWidth - listScrollWidth;
console.log(minus);

// 이벤트마다 갱신될 값
let startX = 0;
let nowX = 0;
let endX = 0;
let listX = 0;

// 유틸함수정의
const getClientX = (e) => {
  const isTouches = e.touches ? true : false;
  // console.log("e.clientX: " + e.clientX);
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  console.log(window.getComputedStyle(hashContent).transform);
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
    // getComputedStyle(hashContent).transform.split(",")[5]
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

// 이벤트 핸들러 선언 및 스크롤 시작 이벤트 구현

function onClick(e) {
  if (startX - endX !== 0) {
    e.preventDefault();
  }
}

function onScrollMove(e) {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
}

function onScrollEnd(e) {
  endX = getClientX(e);
  listX = getTranslateX();
  console.log(minus);
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
  window.removeEventListener("click", onClick);

  setTimeout(() => {
    bindEvents();
    hashContent.style.transition = "";
  }, 100);
}

function onScrollStart(e) {
  startX = getClientX(e);
  window.addEventListener("mousemove", onScrollMove);
  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mouseup", onScrollEnd);
  window.addEventListener("touchend", onScrollEnd);
}

// 이벤트 연결
const bindEvents = () => {
  hashContent.addEventListener("mousedown", onScrollStart);
  hashContent.addEventListener("touchstart", onScrollStart);
  hashContent.addEventListener("click", onClick);
};
bindEvents();
