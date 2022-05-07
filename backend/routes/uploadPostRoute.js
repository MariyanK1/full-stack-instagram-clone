const express = require("express");
const uploadPostRouter = express.Router();
const { uploadFile, handler } = require("../controllers/postImageController");

uploadPostRouter.route("/").post(uploadFile, handler);

module.exports = uploadPostRouter;
