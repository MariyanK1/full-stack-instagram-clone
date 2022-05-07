const express = require("express");
const uploadRouter = express.Router();
const {
  uploadFile,
  handler,
} = require("../controllers/uploadAvatarController");

uploadRouter.route("/").post(uploadFile, handler);

module.exports = uploadRouter;
