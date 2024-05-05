import express from "express";
import {
  deleteUserController,
  followUserController,
  getUserController,
  getUserProfileController,
  unfollowUserController,
  updateUserController,
} from "../controllers/user.controller.js";

const router = express.Router();

router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);
router.get("/:id", getUserController);
router.get("/", getUserProfileController);

router.put("/follow/:id", followUserController);
router.put("/unfollow/:id", unfollowUserController);

export default router;
