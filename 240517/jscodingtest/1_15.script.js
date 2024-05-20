const userInput = prompt("단어를 입력하세요");

const solution = (userInput) => {
  let answer = "";

  // 사용자가 입력한 문자열의 정가운데를 정의하는 기준값
  let middle = Math.floor(userInput.length / 2);

  // substring(a, b) => 문자열 객체의 시작 인덱스(a)부터 종료 인덱스(b) 직전까지 문자열 반환
  if (userInput.length % 2 === 1) {
    answer = userInput.substring(middle, middle + 1);
  } else {
    answer = userInput.substring(middle - 1, middle + 1);
  }

  return answer;
};

console.log(solution(userInput));
