const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
  },
});

module.exports = mongoose.model("Task", taskSchema);
