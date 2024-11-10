const express = require('express')
const mysql = require('mysql2/promise');
const app = express()

app.use(express.json())
app.use(
    express.urlencoded({
      extended: true,
    }));

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'your_username',
      password: 'your_password',
      database: 'your_database'
    });

    // Execute a simple query
    const [rows, fields] = await connection.execute('SELECT * FROM users');
    console.log('Query results:', rows);

    await connection.end();
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}


module.exports = app;