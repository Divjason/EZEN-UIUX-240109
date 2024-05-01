// 프로그래밍 언어 2가지 실행관련 지향 방식
// 실행문 방식 : C / C++ / C#
// 개발자 코드 => 실행
// 요즘 컴퓨터 device 매체의 성능이 좋아지기 시작!!
// 컴퓨터 처리할 수 있는 능력 한계 => 메모리 && cpu
// 프로그래밍언어 능력
const arrow1 = (a: number, b: number): number => {
  return a + b;
};

// 표현식문 방식
// 어떠한 프로그래밍 코드를 실행함과 동시에 값을 반환(*전달)할 수 있는 언어 뒤이어 많이 선보이게됨
// JS & TS & python
const arrow2 = (a: number, b: number): number => a + b;

// 실행문 && 표현식문 => 다중패러다임 언어

// 고차함수 && 클로져

// 표현식 VS 표현식"문"
// 인강 : 표현식!!! return

const a = 1;
const b = 0;

// 표현식
// 도출될 결과값을 출력하는 기능까지만 하는 문장?!
if (a > b) {
  console.log("a > b");
}

// 표현식문
// 표현식을 통해서 도출된 결과값을 어딘가에 담아서 관리할 수 있는 종합적인 문장?!
const isGreator = (a: number, b: number): boolean => a > b;
