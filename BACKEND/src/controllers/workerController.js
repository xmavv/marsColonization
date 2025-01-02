import {pool} from '../db.js';

export const getWorkers = async function (req, res) {
    try {
        const userID = req.params.userid *1;
        const [[data]] = await pool.query(`SELECT * FROM Workers WHERE user_id = ?`,[userID])
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
};

export const updateWorkers = async function(req, res) {
    try {
        const userID = req.params.userid * 1;
        const entries = Object.entries(req.body)
        entries.forEach(async ([worker, value]) => await pool.query(`UPDATE Workers SET ?? = ? WHERE user_id = ?`,[worker,value,userID]));
        let [[data]] = await pool.query("SELECT * FROM Workers WHERE user_id = ?",[userID])
        entries.forEach(([worker, value]) => data[worker] = value);
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
    const workers = ['electricians','biologists','hydrologists','chemists','meteorologists']
    try {
        const entries = Object.entries(req.body);
        if (!(entries.every(([worker,value]) => workers.includes(worker) && Number.isInteger(value*1) && value*1 >= 0))) {
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