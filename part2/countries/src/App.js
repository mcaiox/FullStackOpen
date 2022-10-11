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
  const handleFilterValueChange = (event) => {
    let filterValue = event.target.value;
    if (filterValue) {
      const regex = new RegExp(filterValue, "i");
      const countriesResult = countries.filter((country) =>
        country.name.common.match(regex)
      );
      if (countriesResult.length < 10 && countriesResult.length > 1) {
        setView("<10");
      } else if (countriesResult.length === 1) {
        setView("1");
      } else {
        setView(">10");
      }

      setFilterValue(filterValue);
    }
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
