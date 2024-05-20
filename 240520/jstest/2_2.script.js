// T는 130인 친구 앞에 존재
// 총 5명의 친구 : 130 135 148 150 153

const arr = [130, 135, 148, 140, 145, 150, 150, 153];

const solution = (arr) => {
  let answer = 1;
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
};

console.log(solution(arr));
