const button = document.querySelector("button");
const result = document.querySelector("#result");

// 로또 규칙!!
// 한 번 추첨 시 : 6개의 숫자 (*반드시 중복x)

// 각각의 6개의 숫자 : 최대 45까지 가능
// 1~45까지의 구간 숫자, 랜덤 => 수학객체 random() * 45

// 반복문!!! * 6번

// 절대 중복x => Set()
// add()

// result 출력!!!
// innerText

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const lottoPlay = () => {
  const { digitCount, maxNumber } = luckyNumber;
  const myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size !== 6) {
    for (let i = 0; i < digitCount; i++) {
      myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
    }
  } else {
    result.innerText = `${[...myNumber]}`;
  }
};

button.addEventListener("click", lottoPlay);
