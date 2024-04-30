// 함수
// 왜? 어떻게?
// 어떤 값을 받은(*매개체) 후 어떤 연산 및 기능작업을 거쳐서 어떤 값을 반환(*제공)
// 타입스크립트 : 어떤 값들의 타입
// 매개변수 타입 => 변수
// 반환값 타입

// 기본적인 함수형태
// function add(a: number, b: number): number {
//   return a + b;
// }

// 익명 함수형태
// const add1 = function (a: number, b: number): number {
//   return a + b;
// };

// // 화살표 함수형태 => ES6이후 JS 문법
// // 이벤트 리스너에서는 화살표함수를 사용했을 때, this객체가 가리키는 것이 이벤트 대상이 아니라 window function
// const add2 = (a: number, b: number): number => {
//   return a + b;
// };

// 반환값이 없는 함수는 결과값으로 어떤 타입을 정의해야할까?
// void : 반환값을 갖지 않고 있는 함수의 최종 타입을 정의하고자 할 때

function printMe(name: string, age: number): void {
  console.log(`name: ${name}, age: ${age}`);
}

// 타입시그니처

interface Product {
  name: string;
  price: number;
}

const goods: {
  name: string;
  price: number;
} = {
  name: "색연필",
  price: 2000,
};

const printMe01: (arg0: string, arg1: number) => void = function (name, price) {
  console.log(`${name}은 ${price} 입니다.`);
};
