// window.onload = alert("안녕하세요!");

// const button = document.querySelector("button");

// const btnFnc = () => {
//   document.body.style.backgroundColor = "green";
// };

// button.onclick = btnFnc;

// const result = document.querySelector("#result");

// document.body.onkeydown = (event) => {
//   result.innerText = `
//   code : ${event.code},
//   key : ${event.key}
//   `;
// };

// const event = {
//   key: this.keyValue,
// };

// event.key

// const button = document.querySelector("button");

// button.onclick = () => {
//   document.body.style.backgroundColor = "crimson";
// };

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

// const form = document.querySelector("form");
// const button = document.querySelector("input[type='submit']");
// form.addEventListener("submit", () => {

// });

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   const word = document.querySelector("input[type='text']").value;
//   const result = document.querySelector(".result");

//   const count = word.length;
//   result.innerText = count;

//   if(count >= 10) {

//   } else {
//     alert("아이디는 10자 이상이어야 합니다!")
//   }
// });

// const button = document.querySelector("input[type='submit']");
// const word = document.querySelector("input[type='text']");
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   const result = document.querySelector(".result");
//   console.log(e.button);
// });

// const box = document.querySelector("#box");
// box.addEventListener("click", (e) => {
//   alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
// });

document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector(".result");
  result.innerText = `
  code: ${e.code},
  key: ${e.key}
  `;
});
