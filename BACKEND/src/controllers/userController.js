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
    
    if (!req.body.username || !req.body.password) {
        console.log("Empty name or password");
        return res.status(400).json({
            status: 'fail',
            message: 'Empty username or password',
        });
    }
    next();
}

export const checkUsernameIsTaken = async function (req,res, next) {
    const usernames = await pool.query('SELECT username from Users')
    if (usernames[0].some( ({username}) => username == req.body.username)) {
        return res.status(400).json({
            status: 'fail',
            message: 'username taken',
        })
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
        const userID =  result[0].insertId * 1;
        createBuildings(userID);
        createWorkers(userID);
        createResources(userID);
        res.status(201).json({
            status: 'success',
            requestedAt: req.requestTime,
            data: {
                user: {
                    userID,
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

const createBuildings = async function(userID) { 
    const types = ['laboratory', 'farm', 'powerhouse', 'central', 'hydropolis'];   
    
    await Promise.all(types.map((type) => pool.query(`INSERT INTO Buildings(user_id, type) VALUES(?, ?)`,[userID, type]))
);
};

const createWorkers = async function (userID) {
    pool.query(`INSERT INTO Workers(user_id) VALUES(?)`,[userID])
}

const createResources = async function (userID) {
    pool.query(`INSERT INTO Resources(user_id) VALUES(?)`,[userID])
}
