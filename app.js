const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
  host: 'db', // Docker Compose service name
  user: 'root',
  password: 'password',
  database: 'mydb'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
  res.send('Hello World from Node.js!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

