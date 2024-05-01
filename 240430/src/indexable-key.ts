export interface KeyValueType {
  [key: string]: string;
}

export const makeObject = (key: string, value: string): KeyValueType => {
  return { [key]: value };
};

console.log(makeObject("name", "Jack"));
console.log(makeObject("firstName", "Jane"));
