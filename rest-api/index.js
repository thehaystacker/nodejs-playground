const { connect, model } = require("mongoose");

connect("mongodb://127.0.0.1:27017/task-manager");

const modelTasks = model('tasks', {
  description: String,
  completed: Boolean
});

const task1 = new modelTasks({
  description: "Task 1",
  completed: false
});

task1
  .save()
  .then(() => {
    console.log("[Taks has been saved]");
  })
  .catch(error => {
    console.log("[Error saving the task]");
  });
 