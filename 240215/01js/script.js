// if(//조건식이 참이어야) {
//   //실행문이 실행됨!!
// }

// let x = 10;

// if (x > 5) {
//   console.log("x는 5보다 큽니다.");
// }

// const userInput = prompt("당신의 이름을 입력하세요");

// if (userInput === null) {
//   alert("취소하셨습니다!");
// } else {
//   alert(`${userInput}님 환영합니다!`);
// }

// const score = Number(prompt("프로그램 점수 : "));

// // 예외조항 처리
// // 중첩사용이 가능!! = 반복해서 사용할 수 있음
// if (score != null) {
//   if (score >= 90) {
//     alert("A 학점");
//   } else if (score >= 80) {
//     alert("B 학점");
//   } else {
//     alert("C 학점");
//   }
// }

// 조건문을 활용해서 사용자에게 어떤 숫자를 하나 받아서 그 숫자가 짝수인지, 홀수인지를 확인한 이후 알림창을 활용해서 사용자에서 짝수 혹은 홀수입니다. 라는 메세지를 출력해주세요!!!

// const userPickNum =
// camel표기법
// sneak표기법 : user_picknum
// 헝가리언표기법 : Userpicknum

// 가장 좋은 변수명 = 식별자는 명시적 & 직관적
// 1) 예약어 : 이미 JS & window 사용중인 고유명사
// document, window
// 2) 변수명 작명 가장 앞에 사용할 수 있는 것들 : $, _, 영문자 가능 (*숫자 / 특수문자 절대 불가!!)
// 3) 변수명 반드시 대.소문자 구분

// const userNum = prompt("숫자를 입력하세요!");

// if (userNum != null) {
//   const resetnum = Number(userNum);
//   if (resetnum % 2 === 0) {
//     alert("당신이 선택한 숫자는 짝수입니다!");
//   } else {
//     alert("당신이 선택한 숫자는 홀수입니다!");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// if (userNum != null) {
//   const resetnum = Number(userNum);
//   resetnum % 2 === 0 ? alert("짝수입니다") : alert("홀수입니다.");
// } else {
//   alert("취소하셨습니다.");
// }

// 사용자에게 1~12까지의 숫자 중 하나를 받으세요. 그리고 전달받은 숫자에 따라서 다음과 같은 알림메세지가 출력되게 해주세요!

// 사용자가 입력한 숫자 : 9~11 => 독서의 계절 가을이네요!
// 사용자가 입력한 숫자 : 6~8 => 여행하기 좋은 여름이네요!
// 사용자가 입력한 숫자 : 3~5 => 햇살 가득한 봄이네요!
// 사용자가 입력한 숫자 : 12~2 => 스키의 계절 겨울이네요!

// let month = prompt("현재는 몇 월 인가요?", "ex. 2");

// if (month != null) {
//   month = Number(month);
//   if (month >= 9 && month <= 11) {
//     alert("독서의 계절 가을이네요!");
//   } else if (month >= 6 && month <= 8) {
//     alert("여행하기 좋은 여름이네요!");
//   } else if (month >= 3 && month <= 5) {
//     alert("햇살 가득한 봄이네요!");
//   } else if (month >= 13) {
//     alert("존재하지 않는 월 입니다!");
//   } else {
//     alert("스키의 계절 겨울이네요!");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// 사용자에게 id와 pw값을 받으세요! 그리고 해당 id와 pw값이 다음과 같다면, "반갑습니다! 어서오세요!"라는 알림 메세지를 출력해주세요!!

// id : ezenit / pw : 1234

// 그런데, 만약 id만 일치하고, pw가 틀렸을 경우에는 "비밀번호를 확인해주세요!"라는 알림 메세지를 출력해주시고, 만약 id와 pw 둘다 틀렸을 경우에는 "아이디를 확인해주세요!"라는 알림 메세지를 출력해주세요!

// const id = "ezenit";
// const pw = 1234;

// const userId = prompt("당신의 아이디는?");

// if (userId === id) {
//   const userPw = Number(prompt("당신의 비밀번호는?"));
//   if (userPw === pw) {
//     alert(`${userId}님 반갑습니다!`);
//   } else {
//     alert("비밀번호가 일치하지 않습니다!");
//     location.reload();
//   }
// } else {
//   alert("아이디가 일치하지 않습니다!");
//   location.reload();
// }

// switch(// 조건식 => 참) {
//   case 1 : 실행문
//   break;
//   case 2 : 실행문
//   break;
//   case 3 : 실행문
//   break;
//   case 4 : 실행문
//   break;
//   case 5 : 실행문
//   break;
// }

// const subject = prompt("신청할 과목을 선택하세요", "1-HTML, 2-CSS, 3-JS");

// if (subject !== null) {
//   switch (subject) {
//     case "1":
//       alert("HTML을 신청하셨습니다!");
//       break;
//     case "2":
//       alert("CSS를 신청하셨습니다!");
//       break;
//     case "3":
//       alert("JS를 신청하셨습니다!");
//       break;
//     default:
//       alert("잘못입력하셨습니다!");
//       location.reload();
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// 사용자에게 즐겨찾는 쇼핑몰을 물어보시고 이에 대한 답을 받아주세요!
// 쇼핑몰 후보 : 쿠팡 / G마켓 / 11ST / 마켓컬리
// 사용자가 선택한 쇼핑몰이 후보군 안에 존재한다면, prompt창에 "확인"버튼을 클릭하는 순간, 해당 쇼핑몰로 바로 이동하게 만들어주세요!

// window 객체안에 location 객체는 어딘가로 이동하도록 해주는 객체
// location 객체안에 href 속성 => 경로를 지정해주는 속성
// 쿠팡을 사용자가 선택했다면, location.href = "https://www.coupang.com" 결과값을 설정하면, 쿠팡사이트로 이동할 수 있습니다!!!
