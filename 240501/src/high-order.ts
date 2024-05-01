// 일반적인 함수
const add1 = (a: number, b: number): number => a + b;

// 고차 함수
// const add2 =
//   (a: number): ((arg0: number) => number) =>
//   (b: number): number =>
//     a + b; // 클로저 = closure

// const result = add2(1)(2);
// console.log(result);

export type NumberToNumberFunc = (arg0: number) => number;

export const add = (a: number): NumberToNumberFunc => {
  const _add: NumberToNumberFunc = (b: number): number => {
    return a + b;
  };
  return _add;
};

// "고차함수"는 함수 안에 또 다른 함수를 실행시킨 후 바깥쪽에서 실행된 결과값을 받아서 내부에서 연산 및 처리작업 후 최종 결과값을 출력할 수 있도록 하기 위해 고안된 함수

// 수학적 사고 능력!!

// 클로저는 고차함수를 실행시키기 위한 중요한 JS 개념
// 변수 : scope => Global / Local
