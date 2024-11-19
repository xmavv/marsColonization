import express from 'express';
import {getAllUsers, checkBody, createUser, getUser, checkUsername, checkUsernameIsTaken} from '../controllers/userController.js'
export const router = express.Router();

router.route('/').get(getAllUsers).post(checkBody,checkUsernameIsTaken,createUser);

router.route('/:username').get(checkUsername,getUser);


