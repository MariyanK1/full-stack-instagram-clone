const express = require("express");
const postRouter = express.Router();
const {
  getAllPosts,
  makePost,
  deletePost,
  getPost,
  likePost,
  dislikePost,
} = require("../controllers/postsController");

postRouter.route("/").post(makePost).get(getAllPosts).delete(deletePost);

postRouter.route("/:id").get(getPost);
postRouter.route("/like").put(likePost);
postRouter.route("/dislike").put(dislikePost);

module.exports = postRouter;
