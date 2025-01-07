import { buyCosts, experience, WORKERS } from "../config.js";
import { pool } from "../db.js";

export const getWorkers = async function (req, res) {
  try {
    const userID = req.params.userid * 1;
    const [[data]] = await pool.query(
      `SELECT * FROM Workers WHERE user_id = ?`,
      [userID]
    );
    const buyCosts = getBuyCosts();
    res.status(200).json({
      status: "success",
      data: {
        data,
        buyCosts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const checkBody = function (req, res, next) {
  try {
    const entries = Object.entries(req.body);
    if (
      !entries.every(
        ([worker, value]) =>
          WORKERS.includes(worker) &&
          Number.isInteger(value * 1) &&
          value * 1 >= 0
      )
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid Worker or Value",
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  } finally {
    next();
  }
};

const getBuyCosts = function () {
  return buyCosts.workers;
};

export const updateWorkers = async function (req, res) {
  try {
    const userID = req.params.userid * 1;
    const [[curWorkers]] = await pool.query(
      "SELECT * FROM Workers WHERE user_id = ?",
      [userID]
    );
    const entries = Object.entries(req.body);
    const userLevel = await updateUserLevel(userID, entries, curWorkers);
    const newCoins = await takeResources(userID, entries, curWorkers);
    entries.forEach(
      async ([worker, value]) =>
        await pool.query(`UPDATE Workers SET ?? = ? WHERE user_id = ?`, [
          worker,
          value,
          userID,
        ])
    );
    let [[data]] = await pool.query("SELECT * FROM Workers WHERE user_id = ?", [
      userID,
    ]);
    data = { ...data, ...req.body };
    data["userlevel"] = userLevel;
    data["coins"] = newCoins;
    res.status(200).json({
      status: "success",
      message: "Updated Workers",
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

const updateUserLevel = async function (userID, entries, curWorkers) {
  let [[{ level }]] = await pool.query("SELECT level FROM Users WHERE id = ?", [
    userID,
  ]);
  for (const [worker, value] of entries) {
    const diff = value - curWorkers[worker];
    if (diff > 0) {
      level += diff * experience.workers[worker].EXP;
    }
  }
  await pool.query("UPDATE Users SET level = ? WHERE id = ?", [level, userID]);
  return level;
};

const takeResources = async function (userID, entries, curWorkers) {
  let totalCost = 0;
  for (const [worker, value] of entries) {
    const diff = value - curWorkers[worker];
    if (diff > 0) {
      totalCost += diff * buyCosts.workers[worker].COINS;
    }
  }
  const [[{ coins }]] = await pool.query(
    "SELECT coins FROM Resources WHERE user_id = ?",
    [userID]
  );
  const newCoins = coins - totalCost;
  await pool.query("UPDATE Resources SET coins = ? WHERE user_id = ?", [
    newCoins,
    userID,
  ]);
  return newCoins;
};
