// 함수를 정의할 때
// 일반, 익명, 화살표
// function

// 배열 혹은 객체
// const arr = ["1", "2", "3"];

// 변수 선언문 방식
const arr = new Array();
const obj = new Object();

// const fnc = new Function("a", "b", "return a + b");
// function fnc(a, b) {
//   return a + b;
// }

// 함수 타입정의 : 실행문 / 표현식문

// CS

// 실행문 지향 언어 방식
// C언어, Java
const sum1 = (a: number, b: number): number => {
  return a + b;
};

// 표현식문 지향 언어 방식
// JS, TS, Python
const sum2 = (a: number, b: number): number => a + b;

// JS 굉장히 유연한 언어!!!
// 근본 & 플렉서블
// TS, JS => 다중 패러다임 지향 언어 방식

console.log(sum1(1, 2));
console.log(sum2(1, 2));
