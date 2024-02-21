const firstNum = document.querySelector("#number1");
const secondNum = document.querySelector("#number2");
const button = document.querySelector("form input[type='submit']");
const result = document.querySelector("#result");

const getGCD = (firstNum, secondNum) => {
  const max = firstNum > secondNum ? firstNum : secondNum;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

button.onclick = function (e) {
  e.preventDefault();
  result.innerText = getGCD(firstNum.value, secondNum.value);
};
