// Create a Node server and send a response back to the client
const http = require('http');
const someArr = [1,2,3];
const server = http.createServer((req, res) => {   
    res.statusCode = 200; // Set the status code to 200 (OK)
    res.setHeader('Content-Type', 'text/html'); // Set the content type to HTML
    res.write('<h1>Hello, World!</h1>\n'); // Write the response body
    res.write('<p>This is a simple Node.js server.</p>\n'); // Write more to the response body
    let sum = someArr[0];
    res.write(`<p>Calculating sum of array elements: ${sum}</p>\n`);
    res.end('Hello, World!\n'); // Send the response body and end the response. 
    // It will also display "Hello, World!" in the browser
    // If we don't use the res.end(), the browser will keep loading and waiting any further response to be sent
    // The end method signals to the server that all of the response headers and body have been sent
    // and that the server should consider this message complete
});

server.listen(3000, () => {
    console.log('Server is listening on port 5000');
});