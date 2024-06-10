// 메모이제이션이 적용되지 않은 피보나치수열 연산 함수
const fibonacci1 = (n) => {
  if (n === 0 || n === 1) return n;
  return fibonacci1(n - 2) + fibonacci1(n - 1);
};

const fibonacci2 = (n, memo) => {
  if (n === 0 || n === 1) return n;

  if (memo[n] === undefined) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }

  return memo[n];
};

let start = new Date();
console.log(fibonacci1(40));
let end = new Date();
console.log(`fibonacci1 함수 실행 시간 : ${end - start}ms`);

start = new Date();
console.log(fibonacci2(40, []));
end = new Date();
console.log(`fibonacci2 함수 실행 시간 : ${end - start}ms`);
