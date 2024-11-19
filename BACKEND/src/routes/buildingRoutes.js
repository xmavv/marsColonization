import express from "express";
import {
  checkUserID,
  getBuildings,
} from "../controllers/buildingController.js";

export const router = express.Router();

router.route("/:userid").get(checkUserID, getBuildings);
