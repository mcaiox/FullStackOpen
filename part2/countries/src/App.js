import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./filter";
import Countries from "./countries";
function App() {
  const [countries, setCountries] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [view, setView] = useState("<10");
  const hook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };
  useEffect(hook, []);
  const titleCase = (str) => {
    let splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };
  const handleFilterValueChange = (event) => {
    let filterValue = titleCase(event.target.value);
    const countriesResult = countries.filter((country) =>
      country.name.common.includes(filterValue)
    );
    if (countriesResult.length < 10 && countriesResult.length > 1) {
      setView("<10");
    } else if (countriesResult.length === 1) {
      setView("1");
    } else {
      setView(">10");
    }

    setFilterValue(filterValue);
  };

  const countriesToShow =
    view === "<10"
      ? countries.filter((country) => country.name.common.includes(filterValue))
      : view === "1"
      ? countries.filter((country) => country.name.common.includes(filterValue))
      : [];

  return (
    <div className="App">
      <h2>Countries</h2>
      <Filter
        filter={filterValue}
        handleFilterChange={handleFilterValueChange}
      />
      <Countries countriesToShow={countriesToShow} view={view} />
    </div>
  );
}

export default App;
