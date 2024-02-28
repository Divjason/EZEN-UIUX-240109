// // 객체!!
// // 프로퍼티!!
// // 프로퍼티 = 속성
// // key : value 1쌍 => 프로퍼티

// const book1 = {
//   title: "자바스크립트",
//   pages: 648,
// };

// // 온점 표기법
// console.log(book1.title);

// // 대괄호 표기법
// console.log(book1["pages"]);

// book1.pages = 50;
// book1.author = "David";
// console.log(book1);

// new Date();
// new Object();
// new Array();

// // 프로토타입 = 붕어빵 틀
// // 인스턴스 = 붕어빵 틀을 활용해서 만들어진 붕어빵

// const book2 = new Object();
// console.log(typeof book2);

// book2.title = "Typescript";
// book2.pages = 500;
// book2.author = "Alice";

// console.log(book2);

// delete book2.pages;

// console.log(book2);

// 객체 중첩!!
// for (let i = 0; i < 10; i++) {
//   for (let i = 0; i < 10; i++) {}
// }
// if (true) {
//   if (true) {
//     console.log("true");
//   }
// }

// const student = {
//   name: "David",
//   score: {
//     history: 85,
//     science: 94,
//     average: function () {
//       return (this.history + this.science) / 2;
//     },
//   },
// };

// window.document.querySelector();

// const window = {
//   document: {
//     querySelector: function() {

//     }
//   }
// }

// 메서드 = 함수
// console.log(student.score.history);
// console.log(student.score.average());

// const book3 = {
//   title: "파이썬",
//   pages: 360,
//   buy() {
//     console.log("이 책을 구입했습니다");
//   },
// };

// console.log(book3);

// this
// 1) addEventListener => 콜백함수 / 화살표함수 => window
// 2) addEventListener => 콜백함수 / 익명함수 => 바로 위에 상위요소
// 3) 객체 메서드 함수를 생성할 때 / 익명함수 => this 바로 위에 상위요소
// 4) 객체 메서드 함수를 생성할 때 / 화살표함수 => this => winddow

// const book7 = {
//   title: "HTML5 + CSS3",
//   pages: 500,
//   author: "Peter",
//   done: false,
//   finish: function () {
//     this.done === false ? console.log("읽는 중") : console.log("완독");
//   },
// };
// book7.finish();

// 숫자, 문자, 논리 => 원시타입!! : primitve
// 객체, 배열 => 참조타입!! : referece
// 원본 데이터 자료 && 사본 데이터 자료

// const book1 = {
//   title: "인구와 투자의 미래",
//   pages: 500,
//   publish: "2024-02-28",
//   price: 30000,
// };

// 커스터마이징 된 객체를 생성!!
// 생성자 "함수"!!! => 다른 일반적인 함수와는 기능 상이함
// 함수이름 첫글자 => 대문자 입력!!
// 생성자 함수 = 붕어빵 틀
// 만들어질 객체 = 붕어빵

function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
  };
}

const book1 = new Book("자바스크립트", 648, false);
const book2 = new Book("파이썬", 360, true);

console.log(book1);
console.log(book2);

// class

class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }

  finish() {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
  }
}

const book4 = new Book2("html5", 380, true);
console.log(book4);
