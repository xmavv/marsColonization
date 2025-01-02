import { pool } from "../db.js";

export const getTasks = async function (req, res) {
  try {
    const userID = req.params.userid * 1;
    const [data] = await pool.query(
      `SELECT * FROM Tasks WHERE id NOT IN (SELECT task_id FROM Users_Tasks WHERE user_id = ?)`,
      [userID]
    );
    res.status(200).json({
      status: "success",
      data: {
        data,
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
    const userID = req.params.userid * 1;
    const taskID = req.body.task_id * 1;
    const result = await pool.query(
      "INSERT INTO Users_Tasks(user_id, task_id) VALUES(?, ?)",
      [userID, taskID]
    );
    const [data] = await pool.query(
      `SELECT * FROM Tasks WHERE id NOT IN (SELECT task_id FROM Users_Tasks WHERE user_id = ?)`,
      [userID]
    );
    res.status(201).json({
      status: "success",
      message: `Inserted Task`,
      data: {
        data,
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const checkBody = async function (req,res, next) {
  try {
      const taskID = req.body.task_id *1;
      const [[maxID]] = await pool.query(`SELECT MAX(id) as max_id FROM Tasks`)
      if (!(taskID >= 0 && taskID <= maxID.max_id)) {
        return res.status(400).json({
          status: 'fail',
          message: "Invalid task ID",
        })
      }
      next();
  }
  catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}