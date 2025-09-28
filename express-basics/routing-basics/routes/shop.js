const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const Router = express.Router();

Router.get('/', (req, res, next) => {
  console.log('Shop route accessed');
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); 
  // The path will be /shop/ because in app.js we have prefixed all routes in shopRoutes with /shop
  // This is the root route of shopRoutes
  // The path is constructed using path.join to ensure compatibility across different operating systems
  // The path module is a built-in Node.js module that provides utilities for working with file and directory paths
});

// Cleaner way to write path.join function 

// Router.get('/', (req, res, next) => {
//   console.log('Shop route accessed');
//   res.sendFile(path.join(rootDir, 'views', 'shop.html')); 
//   // The path will be /shop/ because in app.js we have prefixed all routes in shopRoutes with /shop
//   // This is the root route of shopRoutes
//   // The path is constructed using path.join to ensure compatibility across different operating systems
//   // The path module is a built-in Node.js module that provides utilities for working with file and directory paths
// });


module.exports = Router;