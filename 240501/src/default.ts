interface IPerson {
  name: string;
  age: number;
}

// 템플릿 리터럴: 문자 => 변수를 문자열로 찾아와서 값을 사용하고자 할 때
// 리터럴: 문자 타입
// 타입정의 : 주석처리
// 숫자 : number, 문자 : string
// 추론 : "hello" => 타입정의 => 문자!!!
// 변수안에 담기는 value값을 가지고 타입을 추론할 때, 리터럴 타입이 작동/실행
// 타입구조도
// 슈퍼타입 <-> 서브타입
// number: 슈퍼타입
// 10: 서브타입

const makePerson = (name: string, age: number = 10): IPerson => ({
  name,
  age,
});

console.log(makePerson("David"));
console.log(makePerson("David", 20));
