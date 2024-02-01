// Import the express module
const express = require('express');

const Config = require('./config');

const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// Set up the server to listen on port 3000
const port = Config.PORT;
app.listen(port, () => {
  console.log(`Server is running onnnnn http://localhost:${port}`);
});
