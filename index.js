// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup (replace with your database credentials)
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'contacts_db'
});

connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});