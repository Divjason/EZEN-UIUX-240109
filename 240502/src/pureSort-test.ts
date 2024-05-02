import { pureSort } from "./pureSort";

const beforeSort = [6, 2, 9, 0];
const afterSort = pureSort(beforeSort);

console.log(beforeSort, afterSort);

// 배열 특정값을 삭제하고 새로운 값으로 업데이트
// filter => 자체적인 몇안되는 순수함수 (*)
// splice => 제거 (*불순함수)
