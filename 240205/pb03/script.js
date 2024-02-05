const button = document.querySelector("#button");
const input = document.querySelector("#userAge");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const num = input.value;
  if (num === "") {
    alert("나이를 입력하세요!");
  } else if (num < 20) {
    alert("당신은 미성년입니다!");
  } else if (num >= 20) {
    alert("당신은 성인입니다!");
  } else {
    alert("나이를 숫자로 입력하세요!");
  }
});
