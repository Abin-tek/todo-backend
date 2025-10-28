const Task = require("../db/models/Task");

const createTask = async (title) => {
  try {
    const newTask = new Task({
      title: title,
    });
    await newTask.save();
    return true;
  } catch (error) {
    console.error("Error during createTask: ", error);
    return false;
  }
};

const readTasks = () => {};

const updateTask = () => {};

const deleteTask = () => {};

module.exports = { createTask, readTasks, updateTask, deleteTask };
