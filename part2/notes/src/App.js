import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [Notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");

  const addNote = (event) => {
    event.preventDefault();
    console.log("Button clicked", event.type);
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {Notes.map((note) => (
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
