const a = Number(prompt("사람 수"));

const solution = (n) => {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
};

console.log(solution(a));
