const Countries = ({ countriesToShow, view }) => {
  if (view) {
    return (
      <div>
        {countriesToShow.map((country) => (
          <li key={country.name.common}>
            {country.name.common} {country.flag}
          </li>
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
