import React from "react";

const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
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

const Content = (props) => {
  console.log(props);
  return (
    <>
      <Part
        part={props.course.parts[0].name}
        exercise={props.course.parts[0].exercises}
      />
      <Part
        part={props.course.parts[1].name}
        exercise={props.course.parts[1].exercises}
      />
      <Part
        part={props.course.parts[2].name}
        exercise={props.course.parts[2].exercises}
      />
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  );
};
export default App;
