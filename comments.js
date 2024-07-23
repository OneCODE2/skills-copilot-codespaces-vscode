// Create web server
// Import dependencies
const express = require('express');

// Create web server
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Controller functions

// Get all comments
const getAllComments = (req, res) => {
  // Logic to get all comments
  res.send('Get all comments');
};

// Create a new comment
const createComment = (req, res) => {
  // Logic to create a new comment
  res.send('Create a new comment');
};

// Define routes
app.get('/api/comments', getAllComments);
app.post('/api/comments', createComment);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
