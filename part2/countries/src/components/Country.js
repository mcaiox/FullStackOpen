import React from "react";

const Country = ({ country }) => {
  console.log("inside country component,there exist", country);
  return (
    <>
      {country.name.common}
      <button type="button" onClick={() => handleClick(country.name.common)}>
        Show
      </button>
    </>
  );
};

export default Country;
