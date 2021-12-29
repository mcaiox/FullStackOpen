import React from "react";

const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>{props.part + " " + props.exercise}</p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>{"Total: " + props.total}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const Content = (props) => {
    console.log(props);
    return (
      <>
        <Part part={part1.name} exercise={part1.exercises} />
        <Part part={part2.name} exercise={part2.exercises} />
        <Part part={part3.name} exercise={part3.exercises} />
      </>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <p>
        <Total total={part1.exercises + part2.exercises + part3.exercises} />
      </p>
    </div>
  );
};
export default App;
