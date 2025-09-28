const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('New request received');
    next();
    // The first paramater in app.use() is the path - optional parameter because if not provided, it defaults to '/'
});

app.use('/users', (req, res, next) => {
    console.log('Processing /users request');
    res.send('Hello from /users route!');
    // This middleware will only be executed for requests to the '/users' path.
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});