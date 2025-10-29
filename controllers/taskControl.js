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

const readTasks = async () => {
  try {
    return await Task.find();
  } catch (error) {
    console.error("Error during fetching all task: ", error);
    return false;
  }
};

const updateTask = async (id, title) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        title: title,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return updatedTask;
  } catch (error) {
    console.error("Error during updateTask: ", error);
    return false;
  }
};

const deleteTask = async (id) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    return deletedTask;
  } catch (error) {
    console.error("Error during delete task: ", error);
    return false;
  }
};

module.exports = { createTask, readTasks, updateTask, deleteTask };
