// 1.Height & Weight 값 정의하기
// 2.button & result 정의하기
// 3.button 이벤트 연산 작업하기
// 3_1.H & W 값 활용 => 연산 => 변수명 => 할당
// 3_2.함수 & 조건문 연산작업
// 4.result에 출력하기

const form = document.querySelector("form");

const display = (bmi) => {
  const result = document.querySelector(".result");
  let group;

  if (bmi >= 30.0) {
    group = "중등도 비만";
  } else if (bmi >= 25.0) {
    group = "경도 비만";
  } else if (bmi >= 23.0) {
    group = "과체중";
  } else if (bmi >= 18.5) {
    group = "정상";
  } else {
    group = "저체중";
  }

  result.innerText = `${bmi} -> ${group} 입니다.`;
};

const calculate = (weight, height) => {
  return (weight / (height * height)).toFixed(1);
};

const formHandler = (e) => {
  e.preventDefault();
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");

  if (weightInput.value !== "" && heightInput.value !== "") {
    const height = heightInput.value / 100;
    const weight = weightInput.value;
    const bmi = calculate(weight, height);

    display(bmi);
    heightInput.value = "";
    weightInput.value = "";
  }
};

form.onsubmit = formHandler;
