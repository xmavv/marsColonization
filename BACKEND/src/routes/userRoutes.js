import express from 'express';
import {getRanking, checkBody, createUser, getUser, checkUsername, checkUsernameIsTaken, updateLevel, checkLogin, deleteUser} from '../controllers/userController.js'
export const router = express.Router();

router.param('username',checkUsername);

router.route('/').get(getRanking).post(checkBody,checkUsernameIsTaken,createUser);
router.route('/:username').get(getUser).patch(updateLevel).delete(deleteUser);
router.route('/login').post(checkBody, checkLogin);

