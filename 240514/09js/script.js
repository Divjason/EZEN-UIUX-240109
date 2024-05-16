const userAnswer = prompt("A가 포함된 단어 입력");

const solution = (word) => {
  let answer = word;
  // g : global (*전역)
  // i : ignore case (*제외 혹은 열외를 허용하지 않음)
  answer = answer.replace(/A/gi, "#");
  return answer;
};

console.log(solution(userAnswer));
