const http = require('http'); // using the http module

const app = http.createServer((req, res) => {
  // req = options, res = requestListener

  res.writeHead(200, { 'Content-type': 'text/plain' });
  // in the page body for any endpoint as plain text...
  res.end('Hello Holberton School!');
});

app.listen(1245); // HTTP server should listen on port 1245

module.exports = app;
// Server app should be assigned to the variable app and this one must be exported
