// 추상클래스를 생성할 때에는 class 명령어 앞에 abstract
// 반드시 추상클래스를 만들때에는 하나 이상의 abstract 속성 혹은 메서드(함수) => 추상화 되어야할 속성 가 존재해야 함!!!

abstract class AbstactPerson5 {
  abstract name: string;
  constructor(public age?: number) {}
}
