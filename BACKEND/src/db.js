import mysql from 'mysql2';
import {config} from './config.js';

export const pool = mysql.createPool(config.db).promise();