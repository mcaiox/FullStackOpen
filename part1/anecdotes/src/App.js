import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text}</button>
);

const Display = ({ heading }) => (
  <div>
    <h3>{heading}</h3>
  </div>
);
const Stat = ({ info, type }) => {
  return type === "has" ? <p>has {info} votes</p> : <p>{info}</p>;
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const updateVotes = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    console.log(points);
  };
  const getRandomIndex = (len) => {
    return Math.floor(Math.random() * len);
  };

  const setNewRandomAnecdote = () => {
    let randomAnecdoteIndex;

    do {
      randomAnecdoteIndex = getRandomIndex(anecdotes.length);
    } while (randomAnecdoteIndex === selected);

    setSelected(randomAnecdoteIndex);
  };

  return (
    <div>
      <Display heading="Anectdote of the day" />
      <Stat info={anecdotes[selected]} />
      <Stat info={points[selected]} type="has" />
      <Button handleClick={updateVotes} text="vote"></Button>
      <Button handleClick={setNewRandomAnecdote} text="next anecdote"></Button>
      <Display heading="Anectdote with most votes" />
      <div>{anecdotes[points.indexOf(Math.max(...points))]}</div>
      <div>Which has {Math.max(...points)} votes</div>
    </div>
  );
};

export default App;
