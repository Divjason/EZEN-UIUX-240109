const userInput = prompt("문자입력");

// ex. apple / 0 1 2 3 4
// JS 문자열에서 인덱스값을 서칭할 때, 좌측

const solution = (userInput) => {
  let answer = "";
  for (let i = 0; i < userInput.length; i++) {
    if (userInput.indexOf(userInput[i]) === i) answer += userInput[i];
  }
  return answer;
};

console.log(solution(userInput));

//answer = aple
