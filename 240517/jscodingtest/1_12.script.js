const userAnswer = prompt("영단어 입력");

const solution = (userAnswer) => {
  let answer = "";

  for (let word of userAnswer) {
    if (word === word.toLowerCase()) {
      answer += word.toUpperCase();
    } else {
      answer += word;
    }
  }
  return answer;
};

console.log(solution(userAnswer));
