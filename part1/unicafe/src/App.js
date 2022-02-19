import React, { useState } from "react";
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const Heading = (props) => <h1>{props.text}</h1>;

const Display = ({ text, value }) =>
  text === "Positive" ? (
    <div>
      {text} {value} %
    </div>
  ) : (
    <div>
      {text} {value}
    </div>
  );

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const setTo = (type) => () => {
    switch (type) {
      case "good":
        setGood(good + 1);
        setAll(all + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        setAll(all + 1);
        break;
      case "bad":
        setBad(bad + 1);
        setAll(all + 1);
        break;
      default:
        console.error("Unknown type for feedback button");
    }
  };
  const avg = all > 0 ? ((good + (bad > 0 ? bad * -1 : 0)) / all) * 100 : 0;
  const positive = good > 0 ? (good / all) * 100 : 0;
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
      <Display value={all} text="All" />
      <Display value={avg} text="Average" />
      <Display value={positive} text="Positive" />
    </div>
  );
};

export default App;
