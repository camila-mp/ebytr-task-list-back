const updateTaskStatusModel = require('../../models/tasks/updateTaskStatus');

module.exports = async (id, status) => {
  const updateStatus = await updateTaskStatusModel(id, status);
  return updateStatus;
};