import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
function App() {
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      if (filterValue !== "") {
        const filteredResult = response.data.filter((country) =>
          country.name.common.toLowerCase().includes(filterValue.toLowerCase())
        );
        setCountries(filteredResult);
      }
    });
  }, [filterValue]);
  const lat = 51.5002;
  const long = -0.1262;

  useEffect(() => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  console.log(weather);

  const handleFilterValueChange = (event) => {
    const filterValue = event.target.value;
    setFilterValue(filterValue);
  };

  const handleClick = (countryClicked) => {
    setFilterValue(countryClicked);
  };

  return (
    <div className="App">
      <h2>Countries</h2>
      <Filter
        filter={filterValue}
        handleFilterChange={handleFilterValueChange}
      />
      <Countries
        countries={countries}
        weather={weather}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
