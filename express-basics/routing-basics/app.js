const express = require('express');
const app = express();
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use((req, res, next) => {
  console.log('New request received');
  next();
});

app.use('/admin', adminRoutes); // All routes in adminRoutes will be prefixed with /admin
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html')); // 404 for any other route
    // __dirname points to the routing-basics folder in this case - the parent folder of app.js
});

app.listen(3000); 