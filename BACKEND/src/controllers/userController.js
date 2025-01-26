import { pool } from "../db.js";

export const getRanking = async function(req,res) {
    try {
    const [data] = await pool.query(`SELECT u.username, u.level, r.coins, r.oxygen, r.temperature, COUNT(t.task_id) AS done_tasks 
                                    FROM Users u INNER JOIN Resources r ON u.id = r.user_id
                                    LEFT JOIN Users_Tasks t ON u.id = t.user_id
                                    GROUP BY u.id, r.coins, r.oxygen, r.temperature
                                    ORDER BY u.level DESC, r.temperature DESC, r.oxygen DESC, done_tasks DESC ,r.coins DESC;`
                                )
    res.status(200).json({
        status: 'success',
        data: {
            data,
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
        const [[data]] = await pool.query(`SELECT * FROM Users WHERE username = ?`,[username])
        res.status(200).json({
            status: 'success',
            data: {
                    data,
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

export const deleteUser = async function(req, res) {
    try {
    const username = req.params.username;
    const [[{id}]] = await pool.query(`SELECT id FROM Users WHERE username = ?`,[username])
    await pool.query(`DELETE FROM Buildings WHERE user_id = ?`,[id])
    await pool.query(`DELETE FROM Resources WHERE user_id = ?`,[id])
    await pool.query(`DELETE FROM Workers WHERE user_id = ?`,[id])
    await pool.query(`DELETE FROM Users_Tasks WHERE user_id = ?`,[id])
    await pool.query(`DELETE FROM Users WHERE username = ?`,[username])
    res.status(200).json({
        status: "success",
        message: "Deleted user",
        data: {
            id,
        }
    })
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

export const checkLogin = async function(req, res) {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const [[data]] = await pool.query('SELECT * FROM Users WHERE username = ? AND password = SHA(?)',[username,password])
        if (data){
            res.status(200).json({
                status: 'success',
                data: {
                    id: data.id,
                    username: data.username,
                    level: data.level,
                }
            })
        }
        else {
            res.status(404).json({
                status: 'fail',
                message: 'Invalid username or password',
            })
        }   
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

export const checkBody = async function(req, res, next){
    
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            status: 'fail',
            message: 'Empty username or password',
        });
    }
    next();
}

export const checkUsernameIsTaken = async function (req,res, next) {
    const [usernames,] = await pool.query('SELECT username from Users')
    if (usernames.some( ({username}) => username == req.body.username)) {
        return res.status(400).json({
            status: 'fail',
            message: 'username taken',
        })
     }
     next();
}

export const checkUsername = async function (req, res, next) {
    const [usernames,] = await pool.query('SELECT username from Users');
    if (!usernames.some( ({username}) => username == req.params.username)) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invaid username',
        })
    }
    next();
}

export const createUser = async function(req,res) {
    try {
        const [result] = await pool.query(`INSERT INTO Users(username, password) VALUES(?, ?)`,[req.body.username, req.body.password])
        await pool.query('UPDATE Users SET password = SHA(?) WHERE username = ?',[req.body.password, req.body.username])
        const userID = result.insertId * 1;
        createBuildings(userID);
        createWorkers(userID);
        createResources(userID);
        const [data] = await pool.query("SELECT id, username, level FROM Users")
        res.status(201).json({
            status: 'success',
            message: 'Created new user',
            data: {
                data,
            },
        });
        } catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err,
            })
        }
}

export const updateLevel = async function (req, res) {
    try {
        const level = req.body.level * 1;
        const userID = req.params.username;
        if (level > 0) { 
            const data = await pool.query(`UPDATE Users SET level = ? WHERE username = ?`,[level,userID])
            res.status(200).json({
                status: 'success',
                message: 'Updated level',
            })
        }
        else {
            res.status(400).json({
                status: "fail",
                 message: 'Invalid level'})
        }
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

const createBuildings = async function(userID) { 
    const types = ['laboratory', 'farm', 'powerhouse', 'central', 'hydropolis'];   
    
    types.map(async (type) => await pool.query(`INSERT INTO Buildings(user_id, type) VALUES(?, ?)`,[userID, type])
);
};

const createWorkers = async function (userID) {
    pool.query(`INSERT INTO Workers(user_id) VALUES(?)`,[userID])
}

const createResources = async function (userID) {
    pool.query(`INSERT INTO Resources(user_id) VALUES(?)`,[userID])
}

