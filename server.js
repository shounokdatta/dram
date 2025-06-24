const express = require('express');
const app = express();
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static('frontEnd'));

// Root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontEnd/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
