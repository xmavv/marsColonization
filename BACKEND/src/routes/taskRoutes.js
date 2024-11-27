import express from "express";
import { checkUserID } from "../controllers/controller.js";
import { endTask, getTasks } from "../controllers/taskController.js";

export const router = express.Router();

router.param("userid", checkUserID);

router.route("/:userid").get(getTasks).post(endTask);
