import express from "express";
import { checkUserID } from "../controllers/controller.js";
import {
  checkBody,
  checkType,
  getBuilding,
  getBuildings,
  updateBuildingLevel,
} from "../controllers/buildingController.js";

export const router = express.Router();

router.param('userid',checkUserID).param('type',checkType);

router.route("/:userid").get(checkUserID, getBuildings);
router.route('/:userid/:type').get(getBuilding).patch(checkBody,updateBuildingLevel)
