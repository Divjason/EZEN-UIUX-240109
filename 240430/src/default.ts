export interface IPerson {
  name: string;
  age: number;
}

export const makePerson = (name: string, age: number = 10): IPerson => ({
  name,
  age,
});

console.log(makePerson("jack"));
console.log(makePerson("jane", 33));
