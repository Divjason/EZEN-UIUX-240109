// 정규표현식 = Regular Expression
// 왜 사용하는가? 어떤 특정 패턴을 정의하고자 할 때, 그리고 그 패턴의 결과값을 도출하고자 할 때
// 구성 => 패턴[플래그]
// 패턴 => 알파벳 3개로 구성된 문자열
// 플래그(*옵션) => 대문자.소문자.대소문자

// let regexp = /\d{3}/;

// let regexp = new RegExp(/\d{3}/);
// console.log(regexp.test("123"));
// console.log(regexp.test("Hello"));

// let obj = {
//   title: "JS",
// };

// let obj01 = new Object();
// obj01.title = "TS";

// 정규표현식은 대.소문자를 가린다!!

// let str = "ES2024 is powerful!";
// console.log(str.match(/ES6/));
// str.replace(/ES2024/, "ES6");

// console.log(/es/.test(str));
// console.log(/es/i.test(str));

// console.log(str.match(/ES\d\d\d\d/));

// let hello = "Hello, everyone.";

// console.log(/^h/i.test(hello));

// console.log(/one.$/.test(hello));
// console.log(/e.$/.test(hello));
// console.log(/one$/.test(hello));

// CSS학습 => Hex컬러코드
// 왜 컴퓨터는 컬러값을 최대 255까지 출력!!
// 16진수
// 0~9, a~f :#fff VS #000

// let testStr = "ES2024";
// console.log(testStr.match(/[^0-9]/g));

// let str = "Oooops";
// console.log(str.match(/o{2}/));
// console.log(str.match(/o{2,}/));
// console.log(str.match(/o{2,4}/i));

// 슬랙 => 정규표현식 표현방법
// 보안관련 업종
// 해킹 / 암호화

// 자주사용하는 정규표현식

// 숫자만 찾아오고자 할 때
/^[0-9]+$/;

// 양의 정수값만 찾아오고자 할 때
/^[1-9]\d*$/;

// 음의 정수값만 찾아오고자 할 때
/^\-[1-9]\d*$/;

// 숫자와 영문자만 찾아오고자 할 때
/^[a-zA-Z0-9]+$/;
