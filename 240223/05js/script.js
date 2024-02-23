// const tsNode = document.createElement("p");
// const tsTextNode = document.createTextNode("Typescript");
// tsNode.appendChild(tsTextNode);

// const basisNode = document.querySelectorAll("p")[0];
// console.log(basisNode);

// document.body.insertBefore(tsNode, basisNode);

// const heading = document.querySelector("h1");
// const parentH1 = heading.parentNode;
// console.log(parentH1);

// heading.addEventListener("click", () => {
//   heading.remove();
// });

// this객체
// 단, 조건!!! => 현재 선택한 li 태그를 this 객체로 대체해서 사용할 수 있음, 단, 클래스 함수를 사용할 때에만 가능!! => 화살표함수를 사용할 때에는 this 객체가 이벤트를 실행시키는 당사자 = 주체가 되는 것이 아니라 window 객체가 this가 됩니다!!

// const items = document.querySelectorAll("li");
// for (let item of items) {
//   item.addEventListener("click", function () {
//     this.parentNode.removeChild(this);
//   });
// }

const buttons = document.querySelectorAll("p span");

for (let button of buttons) {
  button.addEventListener("click", function () {
    this.parentNode.remove();
  });
}
