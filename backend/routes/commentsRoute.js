const express = require("express");
const commentsRouter = express.Router();
const {
  makeComment,
  getComments,
} = require("../controllers/commentsController");

commentsRouter.route("/").post(makeComment).get(getComments);

module.exports = commentsRouter;
