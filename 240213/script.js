// window.addEventListener("DOMContentLoaded", function () {
//   const button = document.querySelector("button");
//   button.addEventListener("click", () => {
//     alert("오늘도 파이팅입니다!");
//     // confirm("오늘도 파이팅 하시겠습니까?");
//     // prompt("당신의 이름을 입력해주세요!");
//   });
// });

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   // alert("오늘도 파이팅입니다!");
//   // confirm("오늘도 파이팅 하시겠습니까?");
//   const userName = prompt("당신의 이름을 입력해주세요!");
//   console.log(userName);
//   document.write(userName);
// });

// const name = "박세진";
// document.write("제 이름은 " + name + "입니다");

// var num;
// num = 7;

// var 변수는 실무에서는 거의 사용하지 않는 키워드!!!
// var num = 7;
// console.log(num);
// document.write(num);

// JS 사용가능한 변수 선언 키워드 3가지!!!
// const let var(*2015년 이전)
// var = variable = 변수 = 유연함!! = flexable
// 프로그래밍 언어 : 지나치게 유연 = 리스크가 많다!!
// 엄격할수록 = 리스크 적어진다!!

// 웹 & 앱 작업 : 혼자서 독립작업 x || 여러사람이 협업!!

// 박세진 : num 선언 & 할당 (*우선)
// var num = 7;

// 김사도 : num 재선언 & 재할당
// var num = 10;

// 성진 : num 재선언 & 재할당
// var num = 14;

// 재선언 & 재할당

// console.log(num);

// 박세진
// const str = "hello World!";

// 김사도
// const str = "hello today";
// str = "hello today";
// console.log(str);

// const : 재선언 & 재할당 원천적으로 불가능한 변수를 선언하고자 할 때
// let : 원칙적으로 재선언은 불가하지만, 재할당은 가능!!!

// let str01 = "Life is good";
// str01 = "today is perfect";
// console.log(str01);

// const str = "test";
// console.log(str);

// const data = 5;
// const str = "hello";
// const boolean = true;

// const title = "최재천의 곤충사회";
// const price = 16200;
// const delivery = "free";
// const author = "최재천";
// const publishingDate = "2024-02-10";

const newBook = {
  title: "최재천의 곤충사회",
  price: 16200,
  delivery: "free",
  author: "최재천",
  cancel: 10000,
  publishingDate: "2024-02-10",
};

// 객체는 {key: value} => 프로퍼티(property)
console.log(newBook.title);
const bookTitle = newBook.title;
document.write(bookTitle);

// const arr = [1, 2, 3, 4, 5];
// const newBook01 = [
//   "최재천의 곤충사회",
//   16200,
//   "free",
//   "최재천",
//   "2024-02-10",
//   10000,
// ];

// const result = prompt("당신의 나이를 입력하세요!");
// console.log(result);

// console.log(typeof result);
// const tenYear = result + 10;
// console.log("당신의 10년뒤 나이는" + tenYear + "세 입니다.");
// console.log(`당신의 10년뒤 나이는 ${tenYear}세 입니다.`);

// const num = "10";
// console.log(typeof num);

// const result = confirm("오늘도 점심 드실거죠?");
// if (result === true) {
//   alert("맛있게 드세요!");
// } else {
//   alert("혹시 무슨일 있으세요?");
// }
// console.log(result);
