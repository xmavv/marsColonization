import { pool } from "../db.js";
import {MAX_BUILDING_LEVEL, TYPES,experience,production, updateCosts} from "../config.js";

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
    const level = data.level + 1;
    const updateCost = getUpdateCost(type, level)
    const product = getProduct(type, level)
 
    res.status(200).json({
      status: 'success',
      data: {
        data,
        updateCost,
        product,
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

const getUpdateCost = function(type, level) {
  const cost = Object.entries(updateCosts.buildings[type])
  const [,factor] = cost.pop()
  const updateCost = {}
  cost.forEach(([resource, value]) => updateCost[resource] = Math.ceil(factor**level*value));
  return updateCost
}

const getProduct = function(type, level) {
  const productEntries = Object.entries(production.buildings[type])
  const [,productFactor] = productEntries.pop()
  const [,time] = productEntries.pop()
  const product = {} 
  productEntries.forEach(([resource, value]) => product[resource] = Math.ceil(productFactor**level*value));
  product["TIME"] = time
  return product
}

export const checkType = function(req,res, next) {   
  if (!TYPES.some((type) => type === req.params.type)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid Building Type',
    })
  }
  next();
}

export const updateBuildingLevel = async function(req, res) {
    try {
      const userLevel = await updateUserLevel(req.params.userid, {...req.params,...req.body})
      const result = await pool.query('UPDATE Buildings SET level = ? WHERE user_id = ? AND type = ?',[req.body.level, req.params.userid,req.params.type])
      res.status(200).json({
        status: 'success',
        message: 'Updated Building Level',
        data: {
            type: req.params.type,
            level: req.body.level,
            userlevel: userLevel,
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

const updateUserLevel = async function(userID, body) {
  try{
    const buildingLevel = body.level
    const type = body.type
    let [[{level}]] = await pool.query("SELECT level FROM Users WHERE id = ?",[userID])
    level += experience.buildings[type].INCREASE_FACTOR**buildingLevel*experience.buildings[type].EXP
    level = Math.round(level / 100) * 100 //Round to hundreds
    await pool.query("UPDATE Users SET level = ? WHERE id = ?",[level,userID])
    return level 
  }
  catch (err) {
      throw "Failed updating user level"
  }


}

// const updateLevel = async function(userID, body) {
//     const [[curWorkers]] = await pool.query("SELECT * FROM Workers WHERE user_id = ?",[userID])
//     let [[{level}]] = await pool.query("SELECT level FROM Users WHERE id = ?",[userID])
//     // console.log("Current level: ", level)
//     for (const [worker, value] of Object.entries(body)) {
//         const diff = value - curWorkers[worker];
//         if (diff > 0) {
//             level += diff*experience.workers[worker].EXP;
//         }
//     }
//     // console.log('New level: ', level);
//     await pool.query("UPDATE Users SET level = ? WHERE id = ?",[level,userID])
//     return level
// }



