const path = require('path');
const express = require('express');
const app = express();

// Middleware
app.use(express.static('dist'));
app.use(express.json());

// Start server
app.listen(8081, function () {
  console.log('Server running on localhost:8081');
});

// Handle GET request
app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});
