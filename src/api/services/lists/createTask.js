const createTaskModel = require('../../models/lists/createTask');

module.exports = async (userId, taskData) => {
  const listWithNewTask = await createTaskModel(userId, taskData);
  return listWithNewTask;
};