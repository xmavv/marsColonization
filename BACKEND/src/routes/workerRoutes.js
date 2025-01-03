import express from 'express';
import { checkUserID } from "../controllers/controller.js";
import { buyCost, checkBody, getWorkers, updateWorkers } from '../controllers/workerController.js';

export const router = express.Router();

router.param('userid',checkUserID);
router.route('/').get(buyCost);
router.route('/:userid').get(getWorkers).patch(checkBody,updateWorkers);