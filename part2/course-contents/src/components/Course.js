import Header from "./Header";
import Content from "./Content";
import Sum from "./Sum";
const Course = ({ courses }) => {
  return (
    <div>
      <Header course={courses.name} />
      <Content parts={courses.parts} />
      <Sum sum={courses.parts.map((course) => course.exercises)} />
    </div>
  );
};

export default Course;
