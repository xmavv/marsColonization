import express from "express";
import {
  checkBody,
  checkType,
  checkUserID,
  getBuilding,
  getBuildings,
  updateBuildingLevel,
} from "../controllers/buildingController.js";

export const router = express.Router();

router.param('/:userid/:type',checkUserID,checkType);

router.route("/:userid").get(checkUserID, getBuildings);
router.route('/:userid/:type').get(getBuilding).patch(checkBody,updateBuildingLevel);
