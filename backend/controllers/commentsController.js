const Comments = require("../models/commentsModel");

// @desc Make a comment
// @route POST /comment

const makeComment = async (req, res) => {
  const comment = await Comments.create({
    commentedBy: req.body.commentedBy,
    comment: req.body.comment,
    idOfThePost: req.body.idOfThePost,
    isReply: req.body.isReply,
  });

  res.status(200).json(comment);
};

// @desc Get a comment
// @route GET /comment

const getComments = async (req, res) => {
  const comments = await Comments.find();

  res.status(200).json(comments);
};

module.exports = { makeComment, getComments };
