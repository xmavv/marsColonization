import { pool } from "../db.js";
import { generateRandomTask } from "./generateRandomTask.js";

for (let i = 0; i < 100; i++) {
  try {
    const task = generateRandomTask();
    const result = await pool.query(
      `INSERT INTO Tasks(name, description,coins, workers,duration , type, resources) VALUES(?,?,?,?,?,?,?)`,
      [
        task.name,
        task.description,
        task.coins,
        task.workers,
        task.duration,
        task.type,
        task.resources,
      ]
    );
    console.log("Inserted tasks: " + i);
  } catch (err) {
    console.log(err);
  }
}

process.exit(0)
