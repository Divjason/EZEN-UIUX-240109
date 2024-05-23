const userWord = prompt("문자와 숫자 조합의 단어 입력!");

const solution = (userWord) => {
  let answer = "";

  for (let w of userWord) {
    if (!isNaN(w)) answer += w;
  }

  return Number(answer);
};

console.log(solution(userWord));
