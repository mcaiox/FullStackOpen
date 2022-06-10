import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    console.log(persons.some((person) => person.name === newName));

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      console.log("creating new person object");
      const personObject = {
        name: newName,
      };
      setPersons(persons.concat(personObject));
    }
    setNewName("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onSubmit={() => {}}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
