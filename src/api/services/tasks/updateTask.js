const updateTaskModel = require('../../models/tasks/updateTask');

module.exports = async (id, editedData) => {
  const updateStatus = await updateTaskModel(id, editedData);
  return updateStatus;
};