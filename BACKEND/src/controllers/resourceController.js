import {pool} from '../db.js';

export const getResources = async function (req, res) {
    try {
        const userID = req.params.userid *1;
        const [[data]] = await pool.query(`SELECT * FROM Resources WHERE user_id = ?`,[userID])
        res.status(200).json({
            status: 'success',
            data: {
                data,
            },
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        })
    }
}

export const updateResources = async function (req, res) {
    try {
        const userID = req.params.userid *1;
        const entries = Object.entries(req.body);
        entries.forEach(([resource,value]) => pool.query(`UPDATE Resources SET ?? = ? WHERE user_id = ?`,[resource,value,userID]));
        const data = Object.fromEntries(entries)
        res.status(200).json({
            status: 'success',
            message: 'Updated resources',
            data: {
                data,
            },
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        })
    }
}

export const checkResources = async function (req, res, next) {
    const resources  = ["coins", 'water', 'food','energy', 'oxygen','temperature']
    const entries = Object.entries(req.body);
    if (!(entries.every(([resource, value]) => resources.includes(resource) && Number.isInteger(value * 1) && (value*1 >= 0 || resource === 'temperature')))) {
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid Resource or Value',
        })
    }
    next();
}