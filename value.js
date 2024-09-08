const person = {
  name: "Mehedi Hasan Himel",
  age: 23,
  profession: "developer",
  salary: 10000,
  married: true,
  "fav places": ["bandorban", "saintmartin", "kuakata"],
};

person.salary = 30000;
person["age"] = 26;
person["fav places"] = ["maldives", "bali", "pataya"];
// console.log(person);

const keyName = "profession";
console.log(person[keyName]);
