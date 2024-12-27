import {pool} from "../db.js";

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
    next()
  }