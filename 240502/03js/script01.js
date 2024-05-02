const a = Number(prompt("첫 번째 숫자"));
const b = Number(prompt("두 번째 숫자"));
const c = Number(prompt("세 번째 숫자"));

const solution = (a, b, c) => {
  let answer;

  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) answer = c;

  return answer;
};

console.log(solution(a, b, c));
