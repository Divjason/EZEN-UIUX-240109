const day = Number(prompt("오늘 날짜 일의 자리수 입력"));
const arr = [25, 23, 11, 47, 53, 17, 33];

const solution = (day, arr) => {
  let answer = 0;
  for (let car of arr) {
    if (car % 10 === day) answer++;
  }

  return answer;
};

console.log(solution(day, arr));
