// JS || TS에서 중첩배열을 사용하는 경우, 타입정의?!
// a = [], b = [] / c = [a, b] / c = [[], []] / c = [...a, ..b]

export const mergeArray = <T>(...arrays: T[][]): T[] => {
  let result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    const array: T[] = arrays[i];
    result = [...result, ...array];
  }

  return result;
};
