import express from "express";
import {
  createPostController,
  deletePostController,
  getPostController,
  getAllPostsController,
  getTimelinePostsController,
  likeAndDislikeController,
  updatePostController,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create-post", createPostController);
router.put("/update-post/:id", updatePostController);
router.delete("/delete-post/:id", deletePostController);
router.get("/get-post/:id", getPostController);
router.get("/", getAllPostsController);

router.put("/like-post/:id", likeAndDislikeController);
router.get("/get-timeline-posts", getTimelinePostsController);

export default router;
