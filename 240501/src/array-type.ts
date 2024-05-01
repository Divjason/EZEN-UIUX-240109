const numArray: number[] = [1, 2, 3];
const strArray: string[] = ["Hello", "JS"];

// 배열안에 객체값이 들어가있다면?

interface IPerson {
  name: string;
  age?: number;
}

const personArray: IPerson[] = [{ name: "David" }, { name: "Jane", age: 33 }];
