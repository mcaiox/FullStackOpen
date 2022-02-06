import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState(10);
  const Display = (props) => <div>{props.value}</div>;
  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
  );

  const setToValue = (newValue) => () => {
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={setToValue(1000)} text="thousand" />
      <Button handleClick={setToValue(0)} text="reset" />
      <Button handleClick={setToValue(value + 1)} text="increment" />
    </div>
  );
};

export default App;

// completed fn => fn and started Passing Event Handlers to Child Components
