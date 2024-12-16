import express from 'express';
import { checkUserID } from "../controllers/controller.js";
import { checkBody, getWorkers, updateWorkers } from '../controllers/workerController.js';

export const router = express.Router();

router.param('userid',checkUserID);

router.route('/:userid').get(getWorkers).patch(checkBody,updateWorkers);