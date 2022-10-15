import React from "react";

const Country = ({ country, handleClick }) => (
  <>
    {country.name.common}
    <button type="button" onClick={() => handleClick(country.name.common)}>
      Show
    </button>
  </>
);

export default Country;
