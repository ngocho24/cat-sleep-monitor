// server/index.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'catsleepmonitor',
  password: 'your_password',
  port: 5432,
});

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
