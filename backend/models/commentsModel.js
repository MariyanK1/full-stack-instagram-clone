const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema(
  {
    commentedBy: String,
    comment: String,
    idOfThePost: String,
    isReply: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comments", commentsSchema);
