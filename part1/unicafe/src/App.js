import React, { useState } from "react";
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Heading = ({ text }) => <h1>{text}</h1>;

const StatisticLine = ({ text, value }) => {
  if (text === "Positive") {
    return (
      <table>
        <tr>
          <td>{text} </td>
          <td>{value} %</td>
        </tr>
      </table>
    );
  } else {
    return (
      <table>
        <tr>
          <td>{text} </td>
          <td>{value} </td>
        </tr>
      </table>
    );
  }
};

const Statistics = ({ good, neutral, bad, all, avg, positive }) => {
  return (
    <div>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={avg} />
      <StatisticLine text="Positive" value={positive} />
    </div>
  );
};

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
  const statsProps = { good, neutral, bad, all, avg, positive };
  return (
    <div>
      <Heading text="Give feedback" />
      <Button handleClick={setTo("good")} text="good"></Button>
      <Button handleClick={setTo("neutral")} text="neutral"></Button>
      <Button handleClick={setTo("bad")} text="bad"></Button>

      <Heading text="Statistics" />
      {all > 0 ? (
        <>
          <Statistics {...statsProps} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
