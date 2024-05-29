const checkBox = document.querySelector("#checkbox");
checkBox.addEventListener("change", () => {
  const element = document.querySelector(".rect");

  if (element.classList.contains("state-now")) {
    element.classList.remove("state-now");
  } else {
    element.classList.add("state-now");
  }
});

const targetEl = document.querySelector(".rect");
// css에서 애니메이션 효과가 시작되는 타이밍에 이벤트를 실행시키려면, animationstart 이벤트 핸들러!!!
// css에서 애니메이션 효과의 반복이 시작되는 타이밍, animationiteraion 이벤트 핸들러!!!
// css에서 애니메이션 효과가 종료되는 타이밍,
// animationend 이벤트 핸들러!!

targetEl.addEventListener("animationstart", () => {
  document.querySelector(".log").innerText =
    "animationstart 발생 : " + new Date().toLocaleTimeString();
});

targetEl.addEventListener("animationiteration", () => {
  document.querySelector(".log").innerText =
    "animationiteration 발생 : " + new Date().toLocaleTimeString();
});

targetEl.addEventListener("animationend", () => {
  document.querySelector(".log").innerText =
    "animationend 발생 : " + new Date().toLocaleTimeString();
});
