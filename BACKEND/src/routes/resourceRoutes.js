import express from 'express'
import { checkUserID } from '../controllers/controller.js';
import { checkResources, getResources, updateResources } from '../controllers/resourceController.js';

export const router = express.Router();


router.route('/:userid').get(checkUserID,getResources).patch(checkResources,updateResources);