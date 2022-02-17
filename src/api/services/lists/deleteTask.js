const deleteTaskModel = require('../../models/lists/deleteTask');

module.exports = async (id) => {
  const deleteTask = await deleteTaskModel(id);
  return deleteTask;
};