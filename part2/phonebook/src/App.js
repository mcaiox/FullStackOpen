import { useState } from "react";
import Filter from "./Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "arto hellas", number: "040-123456", id: 1 },
    { name: "ada lovelace", number: "39-44-5323523", id: 2 },
    { name: "dan abramov", number: "12-43-234345", id: 3 },
    { name: "mary poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [view, setView] = useState(true);

  const addPerson = (event) => {
    event.preventDefault();
    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      alert(`${newName} is already added to phonebook`);
    } else if (newName.length === 0) {
      alert(`Cannot add an empty entry to phonebook`);
    } else {
      console.log("creating new person object");
      const personObject = {
        name: newName.toLowerCase(),
        number: newNumber,
      };
      setPersons(persons.concat(personObject));
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setView(false);
    setFilter(event.target.value);
  };

  const personsToShow = view
    ? persons
    : persons.filter((person) => person.name.includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with
          <input value={filter} onChange={handleFilterChange} />
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Filter personsToShow={personsToShow} />
      <div>debug: {newName + "\t" + newNumber}</div>
    </div>
  );
};

export default App;
