import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./filter";
import Countries from "./countries";
function App() {
  const [countries, setCountries] = useState([]);
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
      <Countries countries={countries} handleClick={handleClick} />
    </div>
  );
}

export default App;
