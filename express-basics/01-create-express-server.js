const express = require('express');
const app = express();

// The use() method is used to define middleware functions
// that will be executed for every incoming request to the server.  
app.use((req, res, next) => {
  console.log('New request received');
  next();
  // Call next() to pass control to the next middleware function.
})

app.use((req, res, next) => {
  console.log('Processing request');
  res.send('Hello from Express!');
  // No need to call next() here since we are sending a response.
  // The send method also sets the appropriate headers and ends the response.
  // If the response is not sent, the request will hang and eventually time out.
  // If the data sent from send() is string, the Content-Type header is set to text/html.
  // If the data sent is an object or array, the Content-Type header is set to application/json.
  // If the data sent is a Buffer, the Content-Type header is set to application/octet-stream.
  // If the data sent is null or undefined, the Content-Type header is not set.
  // If the data sent is a number, it is treated as the HTTP status code.
  // If the data sent is a boolean, it is converted to a string.
  // If the data sent is a function, it is ignored.
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});