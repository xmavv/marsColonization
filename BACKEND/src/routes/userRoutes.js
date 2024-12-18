import express from 'express';
import {getAllUsers, checkBody, createUser, getUser, checkUsername, checkUsernameIsTaken, updateLevel} from '../controllers/userController.js'
export const router = express.Router();

router.param('username',checkUsername);

router.route('/').get(getAllUsers).post(checkBody,checkUsernameIsTaken,createUser);
router.route('/:username').get(getUser).patch(updateLevel);

