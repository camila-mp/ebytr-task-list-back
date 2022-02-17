const updateTaskStatusModel = require('../../models/lists/updateTaskStatus');

module.exports = async (id, status) => {
  const updateStatus = await updateTaskStatusModel(id, status);
  return updateStatus;
};