import express from "express";
import {
  createGoal,
  getGoals,
  goalDeleted,
  goalUpdated,
} from "../controllers/goalsController.js";
import protect from "../mdiddleWare/authMiddleWare.js";

const router = express.Router();
// common route
router.route("/").get(protect, getGoals).post(protect, createGoal);
router.route("/:id").delete(protect, goalDeleted).put(protect, goalUpdated);

// router.get("/", getGoals);
// router.post("/", createGoals);
// router.put("/:id", goalUpdated);
// router.delete("/:id", goalDeleted);

export default router;
