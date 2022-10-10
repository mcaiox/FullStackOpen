const Countries = ({ countriesToShow, view }) => {
  if (view === "<10") {
    return (
      <div>
        {countriesToShow.map((country, index) => (
          <li key={index}>
            {country.name.common} {country.flag}
          </li>
        ))}
      </div>
    );
  } else if (view === "1") {
    return (
      <div>
        {countriesToShow.map((country) => (
          <div>
            <h1>{country.name.common}</h1>
            <br />
            <p>Capital: {country.capital[0]}</p>
            <p>Area {country.area}</p>
            <h6>Languages:</h6>
            <ul>
              {Object.keys(country.languages).map((key, index) => {
                return (
                  <li key={index}>
                    <p>{country.languages[key]}</p>
                  </li>
                );
              })}
            </ul>

            <img src={country.flags.png} alt={country.flag} />
          </div>
        ))}
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
