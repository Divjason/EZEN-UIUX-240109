export const arrayLength = <T>(array: T[]): number => array.length;
export const isEmpty = <T>(array: T[]): boolean => arrayLength(array) === 0;
