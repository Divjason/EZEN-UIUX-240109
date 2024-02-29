// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   // this.finish = function () {
//   //   this.done === false ? (str = "읽는 중") : (str = "완독");
//   //   return str;
//   // };
// };

// Book.prototype.finish = function () {
//   this.done = false ? (str = "읽는 중") : (str = "완독");
//   return str;
// };

// const book1 = new Book("자바스크립트", 648, false);
// console.log(book1.finish());

// 생성자함수 => 프로토타입 => 인스턴스
// Object => Book(prototype) => book1(__proto__)

// function Book(title, price) {
//   this.title = title;
//   this.price = price;
// }

// Book.prototype.buy = function () {
//   console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다!`);
// };

// const book1 = new Book("ABCDE", 10000);
// book1.buy();

// // 위에서 만든 생성자함수와 비슷하면서 조금 기능이 추가된 생성자 함수를 또 만들고 싶다면?

// function Textbook(title, price, major) {
//   Book.call(this, title, price);
//   this.major = major;
// }
// Textbook.prototype.buyTextBook = function () {
//   console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다!`);
// };

// Object.setPrototypeOf(Textbook.prototype, Book.prototype);

// const book2 = new Textbook("타입스크립트", 5000, "컴퓨터공학");
// book2.buyTextBook();
// book2.buy();

class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다!`);
  }
}

const book1 = new BookC("자바스크립트", 15000);
book1.buy();

class TextbookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }

  buyTextbook() {
    console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다.`);
  }
}

const book2 = new TextbookC("AI인공지능", 50000, "컴퓨터공학");
book2.buyTextbook();
book2.buy();
