import { pool } from "../db.js";
import {MAX_BUILDING_LEVEL} from "../config.js";

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
    try {
      const result = await pool.query('UPDATE Buildings SET level = ? WHERE user_id = ? AND type = ?',[req.body.level, req.params.userid,req.params.type])
      res.status(200).json({
        status: 'success',
        message: 'Updated Building Level',
        data: {
            type: req.params.type,
            level: req.body.level,
        },
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
  if (!(level >= 0 && level <= MAX_BUILDING_LEVEL)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid Level Value'
    })
  }
  next()
}

