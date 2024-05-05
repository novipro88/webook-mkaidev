import express from "express";
import {
  deleteUserController,
  getUserController,
  updateUserController,
} from "../controllers/user.controller.js";

const router = express.Router();

router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);
router.get("/:id", getUserController);

export default router;
