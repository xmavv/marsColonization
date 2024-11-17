import { pool } from "../db.js";

export const getAllUsers = async function(req,res) {
    try {
    const [rows,] = await pool.query(`SELECT * FROM Users`)

    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: rows.lenght,
        data: {
            rows,
        },
    
    });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        })
    }
}

export const getUser = async function (req,res) {
    try {
        const username = req.params.username;
        const [result] = await pool.query(`SELECT * FROM Users WHERE username = ?`,[username])
        const user = result[0];
        console.log(result);
        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            data: {
                    user,
                },
        })
    }
    catch (err) {
        res.status(404).json({
            message: 'fail',
            message: err,
        })
    }
}


export const checkBody = async function(req, res, next){
    console.log("checking body...")
    if (!req.body.username || !req.body.password) {
        console.log("Empty name or password");
      return res.status(400).json({
        status: 'fail',
        message: 'Empty username or password',
      });
    }
    next();
}

export const checkUsername = async function (req, res, next) {
    const usernames = await pool.query('SELECT username from Users');
    if (!usernames[0].some( ({username}) => username == req.params.username)) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invaid username',
        })
    }
    next();
}


export const createUser = async function(req,res) {
    try {
        const result = await pool.query(`INSERT INTO Users(username, password) VALUES(?, ?)`,[req.body.username, req.body.password])
        res.status(201).json({
            status: 'success',
            requestedAt: req.requestTime,
            data: {
                user: {
                    userID: result[0].insertId,
                    username: req.body.username,
                    password: req.body.password,
                }
            },
    
        });
        } catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err,
            })
        }
}
