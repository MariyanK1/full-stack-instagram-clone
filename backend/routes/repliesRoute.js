const express = require("express");
const router = express.Router();
const {
  getReplies,
  createReplies,
} = require("../controllers/repliesController");

router.route("/").get(getReplies).post(createReplies);

module.exports = router;
