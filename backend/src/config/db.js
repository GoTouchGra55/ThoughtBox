require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    throw new Error("There was an error connecting to MongoDB: ", err);
  }
};

module.exports = connectDB;
