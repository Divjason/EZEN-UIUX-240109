// 객체 값 반복 실행!!
// for...in 문

const bag = {
  type: "bagpack",
  color: "blue",
  size: 15,
};

for (key in bag) {
  console.log(`${key} : ${bag[key]}`);
}

const book1 = {
  title: "자바스크립트",
  pages: 648,
  buy: function () {
    console.log("이 책을 구입했습니다!");
  },
};

// ES6문법
// 객체의 key 혹은 value을 추출해서 배열을 생성!!

const keys = Object.keys(book1);
console.log(keys);

const values = Object.values(book1);
console.log(values);

const entries = Object.entries(book1);
console.log(entries);

[
  ["key", "value"],
  ["key", "value"],
  ["key", "value"],
];
