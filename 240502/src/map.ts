export const map = <T, Q>(
  array: T[],
  callback: (value: T, index?: number) => Q
): Q[] => {
  let result: Q[] = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    result = [...result, callback(value, i)];
  }
  return result;
};
