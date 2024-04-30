import { IPerson, ICompany } from "./IPerson_ICompany";

const jack: IPerson = {
  name: "jack",
  age: 22,
};

const apple: ICompany = {
  name: "Apple",
  age: 40,
};

let { name, age } = jack;
