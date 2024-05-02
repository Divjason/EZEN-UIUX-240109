export const filter = <T>(
  array: T[],
  callback: (value: T, index?: number) => boolean
): T[] => {
  let result: T[] = [];
  for (let i: number = 0; i < array.length; i++) {
    const value = array[i];
    if (callback(value, i)) result = [...result, value];
  }
  return result;
};
