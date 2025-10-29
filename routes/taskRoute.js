const express = require("express");
const router = express.Router();
const {
  createTask,
  readTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskControl");
const Task = require("../db/models/Task");

router.post("/", async (req, res) => {
  try {
    const title = req.body.title;
    const taskCreated = await createTask(title);
    if (taskCreated) {
      res.status(201).send("task created");
    } else {
      res.status(500).send("Server Busy");
    }
  } catch (error) {
    console.error("Error creating task: ", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allTask = await readTasks();
    res.status(200).json(allTask);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const taskUpdated = await updateTask(id, title);
    if (taskUpdated) {
      res.status(200).send("task updated");
    } else {
      res.status(500).send("Server Busy");
    }
  } catch (error) {
    console.error("Error updating task: ", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const taskDeleted = await deleteTask(id);
    if (taskDeleted) {
      res.status(200).json({message: "task deleted"});
    } else {
      res.status(500).send("Server Busy");
    }
  } catch (error) {
    console.error("Error updating task: ", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
})

module.exports = router;
