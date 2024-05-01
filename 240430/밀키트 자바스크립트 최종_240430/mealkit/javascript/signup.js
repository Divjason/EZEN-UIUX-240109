const month = document.querySelector(".month");
for (let i = 1; i <= 12; i++) {
  const option = document.createElement("option");
  option.innerText = `${i}월`;
  option.setAttribute("value", i);
  month.appendChild(option);
}

const day = document.querySelector(".day");
for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.innerText = `${i}일`;
  option.setAttribute("value", i);
  day.appendChild(option);
}

const button = document.querySelector(".receive");
button.addEventListener("click", () => {
  const userPhone = document.querySelector(".userphone");
  const phoneNum = userPhone.value.replace(/-/g, "");
  const authNum = Math.floor(Math.random() * 9000) + 1000;
  alert(`${phoneNum}님의 인증번호는 ${authNum}입니다.`);

  const authInput = document.querySelector(
    ".authenticate div:last-child input"
  );
  const authBtn = document.querySelector(".prove");

  authBtn.addEventListener("click", () => {
    if (Number(authNum) === Number(authInput.value)) {
      alert("정상인증되었습니다. 가입하기 버튼을 눌러주세요!");
    } else {
      alert("인증번호가 불일치합니다. 다시 시도해주세요!");
    }
  });
});
