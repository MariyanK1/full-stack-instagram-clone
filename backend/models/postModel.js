const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    email: String,
    postBody: String,
    postImage: String,
    likes: [mongoose.Schema.Types.String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
