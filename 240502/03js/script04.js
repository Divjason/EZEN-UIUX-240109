const a = Number(prompt("숫자입력"));

const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }

  return answer;
};

console.log(solution(a));
