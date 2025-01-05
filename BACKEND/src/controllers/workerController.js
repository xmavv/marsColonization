import { buyCosts, experience, WORKERS } from '../config.js';
import {pool} from '../db.js';

export const getWorkers = async function (req, res) {
    try {
        const userID = req.params.userid *1;
        const [[data]] = await pool.query(`SELECT * FROM Workers WHERE user_id = ?`,[userID])
        const buyCosts = getBuyCosts()
        res.status(200).json({
            status: 'success',
            data: {
                data,
                buyCosts,
            }
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        })
    }
};

const getBuyCosts = function() {
    return buyCosts.workers
}

export const updateWorkers = async function(req, res) {
    try {
        const userID = req.params.userid * 1;
        const userLevel = await updateUserLevel(userID,req.body);
        const entries = Object.entries(req.body)
        entries.forEach(async ([worker, value]) => await pool.query(`UPDATE Workers SET ?? = ? WHERE user_id = ?`,[worker,value,userID]));
        let [[data]] = await pool.query("SELECT * FROM Workers WHERE user_id = ?",[userID])
        data = {...data,...req.body}
        data["userlevel"] = userLevel
        res.status(200).json({
            status: 'success',
            message: 'Updated Workers',
            data: {
                data,
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
};

export const checkBody = function(req, res, next) {
    try {
        const entries = Object.entries(req.body);
        if (!(entries.every(([worker,value]) => WORKERS.includes(worker) && Number.isInteger(value*1) && value*1 >= 0))) {
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid Worker or Value'
            })
        }
    }
    catch (err) {
        return res.status(400).json({
            status: 'fail',
            message: err
        })
    }
    finally {
        next();
    }
}

const updateUserLevel = async function(userID, body) {
    const [[curWorkers]] = await pool.query("SELECT * FROM Workers WHERE user_id = ?",[userID])
    let [[{level}]] = await pool.query("SELECT level FROM Users WHERE id = ?",[userID])
    for (const [worker, value] of Object.entries(body)) {
        const diff = value - curWorkers[worker];
        if (diff > 0) {
            level += diff*experience.workers[worker].EXP;
        }
    }
    await pool.query("UPDATE Users SET level = ? WHERE id = ?",[level,userID])
    return level
}
