const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Sample data (you can replace this with a database)
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// GET route to fetch all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// POST route to add a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
