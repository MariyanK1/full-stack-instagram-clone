const express = require("express");
const avatarsRouter = express.Router();
const {
  getAvatars,
  createAvatar,
  editAvatar,
  deleteAvatar,
} = require("../controllers/avatarsController");

avatarsRouter
  .route("/")
  .get(getAvatars)
  .post(createAvatar)
  .put(editAvatar)
  .delete(deleteAvatar);

module.exports = avatarsRouter;
