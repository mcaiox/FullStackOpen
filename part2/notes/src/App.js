import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [Notes, setNotes] = useState(props.notes);

  const addNote = (event) => {
    event.preventDefault();
    console.log("Button clicked", event.type);
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
        <input />
        &nbsp;
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
