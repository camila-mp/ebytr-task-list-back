const createTaskModel = require('../../models/tasks/createTask');

module.exports = async (userId, taskData) => {
  const listWithNewTask = await createTaskModel(userId, taskData);
  return listWithNewTask;
};