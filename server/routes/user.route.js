import express from "express";
import {
  deleteUserController,
  followUserController,
  getUserController,
  unfollowUserController,
  updateUserController,
} from "../controllers/user.controller.js";

const router = express.Router();

router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);
router.get("/:id", getUserController);

router.put("/follow/:id", followUserController);
router.put("/unfollow/:id", unfollowUserController);

export default router;
