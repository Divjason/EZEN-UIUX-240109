// 1:가위, 2:바위, 3:보
// a가 이긴다면, A출력
// b가 이긴다면, B출력
// a=b 동률이라면, D출력

const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];

const solution = (a, b) => {
  let answer = "";

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      answer += "D";
    } else if (a[i] === 1 && b[i] === 3) {
      answer += "A";
    } else if (a[i] === 2 && b[i] === 1) {
      answer += "A";
    } else if (a[i] === 3 && b[i] === 2) {
      answer += "A";
    } else {
      answer += "B";
    }
  }

  return answer;
};

console.log(solution(a, b));
