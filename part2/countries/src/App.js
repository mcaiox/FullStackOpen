import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

function App() {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterValueChange = (event) => {
    const filterValue = event.target.value;
    setFilterValue(filterValue);
    if (filterValue) {
      const regex = new RegExp(filterValue, "i");
      const filteredCountries = () =>
        countries.filter((country) => country.name.common.match(regex));
      setFilteredCountries(filteredCountries);
    }
  };

  return (
    <div className="App">
      <h2>Countries</h2>
      <Filter
        filterValue={filterValue}
        handleFilterChange={handleFilterValueChange}
      />
      <Countries
        filteredCountries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
      />
    </div>
  );
}

export default App;
