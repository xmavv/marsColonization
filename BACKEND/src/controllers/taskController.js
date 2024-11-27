import { pool } from "../db.js";

export const getTasks = async function (req, res) {
  try {
    const userID = req.body.userid * 1;
    const [result] = await pool.query(
      "SELECT * FROM tasks WHERE id NOT IN (SELECT task_id FROM users_tasks WHERE user_id = ?)",
      [userID]
    );
    res.status(200).json({
      status: "success",
      data: {
        result,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const endTask = async function (req, res) {
  try {
    const userID = req.body.userid * 1;
    const taskID = req.params.task_id * 1;
    const result = await pool.query(
      "INSERT INTO Users_Tasks(user_id, task_id) VALUES(?, ?)",
      [userID, taskID]
    );
    res.status(201).json({
      status: "success",
      message: `Inserted done task id:${taskID} to user id:${userID}`,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
