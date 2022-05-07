const mongoose = require("mongoose");

const avatarsSchema = mongoose.Schema(
  {
    name: String,
    holder: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Avatars", avatarsSchema);
