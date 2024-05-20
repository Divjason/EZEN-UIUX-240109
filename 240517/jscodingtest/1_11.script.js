const word = prompt("문자를 입력하세요!");

const solution = (word) => {
  let answer = 0;

  for (let b of word) {
    if (b === b.toUpperCase()) answer++;
  }
  return answer;
};

console.log(solution(word));
