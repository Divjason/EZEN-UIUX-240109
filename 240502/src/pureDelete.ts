export const pureDelete = <T>(
  array: readonly T[],
  cb: (val: T, index?: number) => boolean
): T[] => array.filter((val, index) => cb(val, index) === false);
