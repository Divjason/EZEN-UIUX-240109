class A {
  static initValue = 1;
}

// class를 객체를 생성하기 위한 하나의 프로토타입
// 그렇다면, class도 곧 객체아닌가?
// class 내부에 존재하는 속성, 메서드를 활용해서 바깥에서 직접적으로 사용?!
// 원칙적으로는 class 내부에 존재하는 속성, 메서드를 바깥에서 사용하려면 인스턴스 객체를 생성한 이후에 해당 인스턴스의 속성 값을 활용해서 사용하는 것이 문법적으로 맞음
// static : 정적인 <-> interactive : 동적인

const initVal = A.initValue;
console.log(initVal);
