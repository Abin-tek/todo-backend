const mongoose = require("mongoose");
require("dotenv").config();

// Funtion to connect database
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI + "/task-manager");
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to db: ", error);
    process.exit(1);
  }
};

module.exports = connectDb;
