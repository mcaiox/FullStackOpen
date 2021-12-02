const http = require("http"); // AKA Import http from 'http - imports nodes built in web server module

const app = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World");
});

const PORT = 3001;
app.listen(PORT);

console.log(`Server is running  on port ${PORT}`);

// Ended lesson  at simple webserver on this paragraph - Node does not support ES6 modules, but support for them is coming somewhere down the road.
