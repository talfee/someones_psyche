const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = './data.json';

// Load existing entries (or create empty)
let entries = fs.existsSync(DATA_FILE)
  ? JSON.parse(fs.readFileSync(DATA_FILE))
  : [];

// GET all journal entries
app.get('/entries', (req, res) => {
  res.json(entries);
});

// POST a new journal entry
app.post('/entries', (req, res) => {
  const newEntry = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toLocaleDateString()
  };
  entries.unshift(newEntry); // add newest at top
  fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2));
  res.status(201).json(newEntry);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
