const arr = [5, "teacher", "time", "student", "beautiful", "good"];

const solution = (arr) => {
  let answer = "";

  //JS에서 사용가능한 가장 작은 정수값
  let max = Number.MIN_SAFE_INTEGER;

  for (let text of arr) {
    if (text.length > max) {
      max = text.length;
      answer = text;
    }
  }
  return answer;
};

console.log(solution(arr));
