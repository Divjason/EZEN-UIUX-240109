export class A {
  value: number = 1;
  method: () => void = function (): void {
    console.log(`value: ${this.value}`);
  };
}

// 함수에서 매개변수의 타입을 지정하지 않으면 에러!!!
// 함수의 매개변수에 어떤 값이 들어올지 모르기 때문에 any
