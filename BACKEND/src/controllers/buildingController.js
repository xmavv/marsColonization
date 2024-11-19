import { pool } from "../db.js";

export const getBuildings = async function (req, res) {
  try {
    const userID = req.params.userid * 1;
    const [buildings] = await pool.query(
      `SELECT * FROM Buildings WHERE user_id = ?`,
      [userID]
    );
    res.status(200).json({
      status: "success",
      data: {
        buildings,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const checkUserID = async function (req, res, next) {
  try {
    const userID = req.params.userid * 1;
    const [userIDs] = await pool.query("SELECT id FROM Users");
    if (!userIDs.some((id) => id.id === userID)) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid User ID",
      });
    }
  } catch (err) {
    return res.status(404).json({
      status: "fail",
      message: err,
    });
  }
  next();
};
