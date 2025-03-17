// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create a comment
app.post('/comments', (req, res) => {
  console.log('Creating a comment...');
  res.send('Comment created!');
});
// Read a comment
app.get('/comments/:commentId', (req, res) => {
  console.log('Reading a comment...');
  res.send('Comment read!');
});
// Update a comment
app.put('/comments/:commentId', (req, res) => {
  console.log('Updating a comment...');
  res.send('Comment updated!');
});
// Delete a comment
app.delete('/comments/:commentId', (req, res) => {
  console.log('Deleting a comment...');
  res.send('Comment deleted!');
});
// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});