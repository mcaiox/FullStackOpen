const t = [1, 2, 3, 4, 5];

const [first, second, ...rest] = t;

console.log(rest);

//Complete Arrays section, at Objects bit now

const object1 = {
  name: "Arto Hellas",
  age: 35,
  education: "PHD",
};

const object2 = {
  name: "Full Stack web application development",
  level: "Intermediate studies",
  size: 5,
};

const object3 = {
  name: {
    first: "Dan",
    last: "Abramov",
  },
  grades: [
    { age: 2, level: 3 },
    { age: 5, level: 3 },
  ],
  department: "Stanford University",
};

object3.address = "Helsinki";
object3["secret number"] = 12341;
console.log(object3);
