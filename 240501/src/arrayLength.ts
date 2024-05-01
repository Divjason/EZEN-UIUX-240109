// 타입변수 => 아직 자료의 형태가 결정되지 않은경우, 일단 변수를 통해서 타입의 자리에 임시적으로 놓는 것을 의미!!!!
// 타입변수는 보통 T로 작성
// 문장 안에 타입변수가 작성되었다는 선언!!!
// <타입변수>

export const arrayLength = <T>(array: T[]): number => array.length;
export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0;
