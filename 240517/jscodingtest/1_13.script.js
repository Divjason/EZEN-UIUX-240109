const userInput = prompt("영단어 입력");

const solution = (userInput) => {
  let answer = "";

  for (let k of userInput) {
    if (k === k.toUpperCase()) {
      answer += k.toLowerCase();
    } else {
      answer += k.toUpperCase();
    }
  }

  return answer;
};

console.log(solution(userInput));
