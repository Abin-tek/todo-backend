const express = require("express");
const cors = require("cors");
require("dotenv").config();
const taskRoute = require("./routes/taskRoute");
const connectDb = require("./db/main");

const app = express();
const PORT = parseInt(process.env.PORT) || 3000;

app.use(express.json());
app.use(cors());

// Database connection
connectDb();

// Custome routes
app.use("/task", taskRoute);

// Default route
app.get("/", (req, res) => {
  console.log("➡️ GET / route hit");
  res.send("Server running");
});

// Listen on port
app.listen(PORT, () => {
  try {
    console.log("App listening on port: ", PORT);
  } catch (error) {
    console.error("Error on app listen: ", error);
  }
});
