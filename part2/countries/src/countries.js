const Countries = ({ countriesToShow }) => {
  return (
    <div>
      {countriesToShow.map((country) => (
        <li key={country.name.common}>
          {country.name.common} {country.flag}
        </li>
      ))}
    </div>
  );
};
export default Countries;
