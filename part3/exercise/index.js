const express = require("express");
const app = express();
app.use(express.json()); // for parsing application/json
let notes = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-33-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});
app.get("/api/persons", (request, response) => {
  response.send(notes);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id.slice(1) - 1);
  if (id < notes.length && id >= 0) {
    response.send(notes[id]);
  } else {
    response.status(422).end();
  }
});

app.get("/info", (request, response) => {
  const date = new Date();
  response.send(`
  <div>
    <p>Phonebook has info for 4 people</p>
  </div>
  <div>
    <p>${date}</p>
  </div>
   `);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);
  response.status(204).end();
});

app.post("/api/persons/", (request, response) => {
  const body = request.body;
  if (!body.name) {
    return response.status(400).json({
      error: "name is missing",
    });
  }
  const x = notes.filter((n) => n.name === body.name);
  console.log(x.length);
  // console.log({} == false);
  if (x.length > 0) {
    return response.status(409).json({
      error: "name must be unique",
    });
  } else if (!body.number) {
    return response.status(400).json({
      error: "number is missing",
    });
  }
  const id = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  const note = {
    id: id + 1,
    name: body.name,
    number: body.number,
  };
  notes = notes.concat(note);
  response.json(note);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running  on http://localhost:${PORT}`);
});
