import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [countries, setCountries] = useState([]);
  const [view, setView] = useState(true);
  const hook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };
  useEffect(hook, []);
  console.log(countries);
  return (
    <div className="App">
      <div>{countries.map((country) => ({ country }))}</div>
    </div>
  );
}

export default App;
