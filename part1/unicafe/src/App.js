import React, { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Button = () => {};

  const Display = (props) => (
    <div>
      {props.text} {props.value}
    </div>
  );
  const DisplayNeutral = (props) => <div>Neutral {props.value}</div>;
  const DisplayBad = (props) => <div>Bad {props.value}</div>;

  const setTo = (type) => () => {
    if (type === "good") {
      setGood(good + 1);
    } else if (type === "neutral") {
      setNeutral(neutral + 1);
    } else if (type === "bad") {
      setBad(bad + 1);
    } else {
      console.error("Unknown type");
    }
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={setTo("good")}>Good</button>
      <button onClick={setTo("neutral")}>Neutral</button>
      <button onClick={setTo("bad")}>Bad</button>

      <h2>Statistics</h2>
      <Display value={good} text="Good" />
      <Display value={neutral} text="Neutral" />
      <Display value={bad} text="Bad" />
    </div>
  );
};

export default App;

// Currently doing 1.6 unicafe step
// Need to make custom components for buttons and display - also add functionality that makes they polymorphic
//Look at previouse excerises and refactor code
