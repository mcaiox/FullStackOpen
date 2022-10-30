import Country from "./Country";

const Countries = ({ countries, setCountries }) => {
  if (countries.length < 10 && countries.length !== 1) {
    return (
      //       <ul>
      //   {countries.map((country, i) =>
      //     <li key={i}> {country.name} <button onClick={() => setCountries([country])}>show</button></li>
      //   )}
      // </ul>
      <div>
        <ul>
          {countries.map((country, index) => (
            <li key={index}>
              {" "}
              {country.name}{" "}
              <button onClick={() => setCountries([country])}>show</button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (countries.length === 1) {
    return (
      <div>
        <Country country={countries[0]} />
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
