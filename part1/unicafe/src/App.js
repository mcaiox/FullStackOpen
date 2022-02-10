import React, { useState } from "react";
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const Heading = (props) => <h1>{props.text}</h1>;

const Display = (props) => (
  <div>
    {props.text} {props.value}
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const setTo = (type) => () => {
    switch (type) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        console.error("Unknown type for feedback button");
    }
  };

  return (
    <div>
      <Heading text="Give feedback" />
      <Button handleClick={setTo("good")} text="good"></Button>
      <Button handleClick={setTo("neutral")} text="neutral"></Button>
      <Button handleClick={setTo("bad")} text="bad"></Button>

      <Heading text="Statistics" />
      <Display value={good} text="Good" />
      <Display value={neutral} text="Neutral" />
      <Display value={bad} text="Bad" />
    </div>
  );
};

export default App;
