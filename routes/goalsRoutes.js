import express from "express";
import {
  createGoal,
  getGoals,
  goalDeleted,
  goalUpdated,
} from "../controllers/goalsController.js";

const router = express.Router();
// common route
router.route("/").get(getGoals).post(createGoal);
router.route("/:id").delete(goalDeleted).put(goalUpdated);

// router.get("/", getGoals);
// router.post("/", createGoals);
// router.put("/:id", goalUpdated);
// router.delete("/:id", goalDeleted);

export default router;
