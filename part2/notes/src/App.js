import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [Notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: Notes.length + 1,
    };

    setNotes(Notes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? Notes
    : Notes.filter((note) => note.important === true);
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <hr />
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        &nbsp;
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
