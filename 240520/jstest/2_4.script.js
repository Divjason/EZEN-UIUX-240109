const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

const solution = (arr) => {
  let answer = 0;
  let cnt = 0;

  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }

  return answer;
};

console.log(solution(arr));
