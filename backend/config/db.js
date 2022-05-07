const mongoose = require("mongoose");

const connectDB = async () => {
  // Add your MongoDB URI
  const uri = "";
  try {
    const conn = await mongoose.connect(uri);

    console.log(`MongoDB connected! ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
