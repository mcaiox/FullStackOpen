import Country from "./Country";

const Countries = ({ filteredCountries, setFilteredCountries }) => {
  if (filteredCountries.length < 10 && filteredCountries.length !== 1) {
    return (
      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index}>
            {" "}
            {country.name.common}{" "}
            <button onClick={() => setFilteredCountries([country])}>
              show
            </button>
          </li>
        ))}
      </ul>
    );
  } else if (filteredCountries.length === 1) {
    return (
      <div>
        <Country country={filteredCountries[0]} />
      </div>
    );
  } else {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }
};
export default Countries;
