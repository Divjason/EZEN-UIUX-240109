// JS 태생적으로 동기처리 방식 지원
// 외부에서 데이터를 가져올 때 비동기방식으로 처리를 해줘야만 큰 용량의 데이터를 다 가져오지 못한 상태라도 밑에 다른 작은 규모의 데이터를 가져올 수 있는 효율성을 추구!!!

// const displayHello = () => {
//   console.log("Hello");
// };

// displayHello();

// async function displayHello01() {
//   console.log("Hello");
// }

// displayHello01();

// 순수 Promise 객체를 활용한 비동기처리 실행문

// const whatYourFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// };

// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
// };

// whatYourFavorite().then(displaySubject).then(console.log);

// async 예약어를 활용해서 Promise 객체 생성 및 사용!!

// async function whatsYourFavorite() {
//   const fav = "Javascript";
//   return fav;
// }

// async function displaySubject(subject) {
//   return `Hello, ${subject}`;
// }

// whatsYourFavorite().then(displaySubject).then(console.log);

async function whatsYourFavorite() {
  const fav = "Typescript";
  return fav;
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}

init();
