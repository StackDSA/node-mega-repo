const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false})); // Middleware to parse URL-encoded bodies
app.use(express.json()); // Middleware to parse JSON bodies
// body-parser is now included with Express but you can also use it separately if needed

app.use('/add-data', (req, res, next) => {
    console.log('Processing /add-data request');
    res.send('<form method="POST" action="/data"><input type="text" name="info"/><button type="submit">Submit</button></form>');
    // This middleware will only be executed for requests to the '/add-data' path.
});

app.post('/data', (req, res) => {
    console.log('Received data:', req.body); // Access parsed JSON data via req.body
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('Processing / request');
    res.send('Hello from the root route!');
    // This middleware will be executed for requests to the '/' path.
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:3000'); 
});