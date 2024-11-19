import { pool } from "../db.js";
const types = ['laboratory', 'farm', 'powerhouse', 'central', 'hydropolis'];

export const createBuildings = async function(req,res) {    
        types.forEach((type) => pool.query(`INSERT INTO Buildings(user_id, type) VALUES(?, ?)`,[userID, type]))
}