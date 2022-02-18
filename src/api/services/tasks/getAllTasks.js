const getTasks = require('../../models/tasks/getAllTasks');

module.exports = async (userId) => {
  const allTasks = await getTasks(userId);
  return allTasks;
};