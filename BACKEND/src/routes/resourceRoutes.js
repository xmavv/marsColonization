import express from 'express'
import { checkUserID } from '../controllers/controller.js';
import { checkResources, getResources, updateResources } from '../controllers/resourceController.js';

export const router = express.Router();

router.param('userid',checkUserID);

router.route('/:userid').get(getResources).patch(checkResources,updateResources);