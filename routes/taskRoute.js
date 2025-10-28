const express = require("express");
const router = express.Router();
const {
  createTask,
  readTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskControl");

router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    const taskCreated = await createTask(title);
    if (taskCreated) {
      res.status(201).send("task created");
    } else {
      res.status(500).send("Server Busy");
    }
  } catch (error) {
    console.error("Error creating task: ", error);
    res.status(500).send("Server Busy");
  }
});

module.exports = router;
