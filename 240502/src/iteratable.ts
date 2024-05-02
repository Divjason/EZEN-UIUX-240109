// JS : 반복문을 사용할 수 있는 객체 => iterable 객체
// iterable 객체가 되기 위해서는 iterator 속성값이 존재
// 참조타입 자료 : 객체 & 배열
// 객체, 배열 => 반복문 :: generator()

const numArray: number[] = [1, 2, 3];

for (let value of numArray) {
  console.log(value);
}

// generator() => iterable 객체
// next()
