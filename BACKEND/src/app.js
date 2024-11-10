import express, { json, urlencoded } from 'express';
import { createConnection } from 'mysql2/promise';
const app = express()

app.use(json())
app.use(
    urlencoded({
      extended: true,
    }));

async function connectToDatabase() {
  try {
    const connection = await createConnection({
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


export default app;