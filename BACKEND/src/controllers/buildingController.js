import { pool } from "../db.js";

export const getBuildings = async function (req, res) {
  try {
    const userID = req.params.userid * 1;
    const [data] = await pool.query(
      `SELECT * FROM Buildings WHERE user_id = ?`,
      [userID]
    );
    res.status(200).json({
      status: "success",
      data: {
        data,
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

export const getBuilding = async function (req, res) {
  try {
    const userID = req.params.userid *1;
    const type = req.params.type;
    const [[data]] = await pool.query(`SELECT * FROM Buildings WHERE user_id = ? AND type = ?`,[userID,type]);
    res.status(200).json({
      status: 'success',
      data: {
        data,
      }
    })
  }
  catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}

export const checkType = function(req,res, next) {
  const types = ['laboratory', 'farm', 'powerhouse', 'central', 'hydropolis'];   
  if (!types.some((type) => type === req.params.type)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid Building Type',
    })
  }
  next();
}

export const updateBuildingLevel = async function(req, res) {
  console.log("Updating ...");
    try {
      const [data] = await pool.query('UPDATE Buildings SET level = ? WHERE user_id = ? AND type = ?',[req.body.level, req.params.userid,req.params.type])
      res.status(200).json({
        status: 'success',
        message: data.info,
      })
    }
    catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      })
    }
}

export const checkBody = function(req,res,next) {
  const level = req.body.level * 1;
  if (!(level >= 0 && level <= 10)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid Level Value'
    })
  }
  next()
}

