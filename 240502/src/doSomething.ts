import { ResultType } from "./tuple";

// fetch() 공부하기 전에
// Promise 객체
// 정상적인 외부데이터를 수신할 수 있을 때 : try문
// 정상적으로 외부데이터 수신이 불가할 때 : catch문
// false, 왜 오류가 발생했는지 에러메세지

const doSomething = (): ResultType => {
  try {
    throw new Error("Some error occurs...");
  } catch (e: unknown | any) {
    return [false, e.message];
  }
};
