// Problem Statement: Create a server in Node.js and console log the req sent to the server

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request received:', req);
    process.exit(); // Exit the process after logging the request
    // If we don't use the process.exit(), the server will keep running and listening for requests
    // and we won't be able to see the console log for the first request
})

// The createServer callback function takes two arguments: req and res
// req is an object that contains information about the incoming request
// res is an object that is used to send a response back to the client
// And returns an instance of the http.Server class
// In simpler words, it creates a server that listens for incoming requests 
// and handles them using the provided callback function


server.listen(5000, () => {
    console.log('Server is listening on port 3000');
});

// To start and listen to the server on a specific port, use the listen method
// The listen method takes two arguments: the port number and a callback function
// The callback function is called when the server starts listening