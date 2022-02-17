const getTasks = require('../../models/lists/getAllTasks');

module.exports = async (userId) => {
  const allTasks = await getTasks(userId);
  return allTasks;
};