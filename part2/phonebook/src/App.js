import { useState } from "react";
import Persons from "./persons";
import PersonForm from "./personForm";
import Filter from "./filter";

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
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add new contact</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
