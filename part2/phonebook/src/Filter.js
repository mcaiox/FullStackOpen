const Filter = (props) => {
  return (
    <>
      {props.personsToShow.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </>
  );
};
export default Filter;
