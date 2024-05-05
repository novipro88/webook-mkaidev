import {
  createPost,
  deletePost,
  getPost,
  getAllPosts,
  getTimelinePosts,
  likeAndDislike,
  updatePost,
} from "../services/post.service.js";

export const createPostController = async (req, res) => {
  try {
    const newPost = await createPost(req.body);
    res.status(200).json({
      newPost,
      message: "Post has been created successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Post creation failed",
      err,
    });
  }
};

export const updatePostController = async (req, res) => {
  try {
    const updatedPost = await updatePost(req.params, req.body);
    res.status(200).json({
      updatedPost,
      message: "Post has been updated successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Post update failed",
      err,
    });
  }
};

export const deletePostController = async (req, res) => {
  try {
    const deletedPost = await deletePost(req.params, req.body);
    res.status(200).json({
      deletedPost,
      message: "Post has been deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Post deletion failed",
      err,
    });
  }
};

export const likeAndDislikeController = async (req, res) => {
  try {
    const post = await likeAndDislike(req.params, req.body);
    res.status(200).json({
      post,
      message: "Post like or dislike action has been completed",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Post like or dislike action failed",
      err,
    });
  }
};

export const getPostController = async (req, res) => {
  try {
    const post = await getPost(req.params);
    res.status(200).json({
      post,
      message: "Post has been fetched successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Post fetch failed",
      err,
    });
  }
};

export const getTimelinePostsController = async (req, res) => {
  try {
    const timelinePosts = await getTimelinePosts(req.params);
    res.status(200).json({
      timelinePosts,
      message: "Timeline post fetched successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Post fetch failed",
      err,
    });
  }
};

export const getAllPostsController = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json({
      posts,
      message: "Posts have been fetched Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Posts fetch failed",
      err,
    });
  }
};
