const Post = require("../models/postModel");

// @desc Make a post
// @route GET /post:email

const makePost = async (req, res) => {
  const post = await Post.create({
    email: req.body.email,
    avatar: req.body.avatar,
    postBody: req.body.postBody,
    postImage: req.body.postImage,
  });

  res.status(200).json({ message: `Post "${req.body.email}" created` });
};

// @desc Get all posts
// @route GET /getAllPosts

const getAllPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });

  res.status(200).json(posts);
};

// @desc Add like
// @route PUT /post/like

const likePost = async (req, res) => {
  const post = await Post.findOneAndUpdate(
    { _id: req.body.id },
    { $push: { likes: req.body.like } }
  );
  res.status(200).json(post);
};

// @desc dislike
// @route PUT /post/dislike

const dislikePost = async (req, res) => {
  const post = await Post.findOneAndUpdate(
    { _id: req.body.id },
    { $pull: { likes: req.body.dislike } }
  );
  res.status(200).json(post);
};

// @desc Get Post
// @route GET /get-post/:id

const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.status(200).json(post);
};

// @desc Delete a post
// @route DELETE /delete-post

const deletePost = async (req, res) => {
  const post = await Post.findOneAndDelete({ _id: req.body.id });
  res.status(200).json(post);
};

module.exports = {
  getAllPosts,
  getPost,
  makePost,
  deletePost,
  likePost,
  dislikePost,
};
