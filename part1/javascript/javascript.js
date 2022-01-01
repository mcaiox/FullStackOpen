const t = [1, 2, 3, 4, 5];

const [first, second, ...rest] = t;

// console.log(rest);

const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "PHD",
  greet: function () {
    console.log("Hello my name is " + this.name);
  },
  doAddition: function (a, b) {
    console.log(a + b);
  },
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
// console.log(object3);

// You gotta use parameters when the function has more than one parameter.
const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

const result = sum(1, 5);
console.log(result);

//you can use no parameters if the function has one parameter and position it RHS of = and LHS of =>

const squareWithBody = (p) => {
  console.log(p);
  return p * p;
};

//you can use no curly brace if the body is a singular expression

const square = (p) => p * p;

console.log(square(2));

const twotime = (p1, p2) => p1 * p2;

console.log("twotime: " + twotime(2, 3));

//Functions completed, onto excercises next lesson

setTimeout(arto.greet.bind(arto), 1000);

const referenceToGreet = arto.greet.bind(arto);
referenceToGreet();
arto.growOlder = function () {
  this.age += 1;
};

console.log(arto.age); // 35 is printed
arto.growOlder();
console.log(arto.age); // 36 is printed

arto.doAddition(1, 4);
const referenceToAddition = arto.doAddition;

referenceToAddition(10, 15);

//Object methods and this completed and importance of binding this when losing scope to preserve "this"
