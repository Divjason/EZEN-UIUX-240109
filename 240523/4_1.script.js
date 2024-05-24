const arr = [128, 460, 603, 40, 521, 137, 123];

const solution = (arr) => {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = 0;
    let tmp = x;

    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
};

console.log(solution(arr));
