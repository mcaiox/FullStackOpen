import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./filter";
import Countries from "./countries";
function App() {
  const [countries, setCountries] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [view, setView] = useState(true);
  const hook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };
  useEffect(hook, []);
  const titleCase = (str) => {
    let splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  };
  const handleFilterValueChange = (event) => {
    console.log(event.target.value);

    let filterValue = titleCase(event.target.value);
    console.log(filterValue);

    setView(false);
    setFilterValue(filterValue);
  };

  // console.log("countries", countries[1]?.name?.common);

  const countriesToShow = view
    ? countries
    : countries.filter((country) => country.name.common.includes(filterValue));

  return (
    <div className="App">
      <h2>Countries</h2>
      <Filter
        filter={filterValue}
        handleFilterChange={handleFilterValueChange}
      />
      <Countries countriesToShow={countriesToShow} />
    </div>
  );
}

export default App;
