const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: String,
    password: String,
    repeatPassword: String,
    sex: String,
    registeredAt: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
