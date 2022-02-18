const deleteTaskModel = require('../../models/tasks/deleteTask');
const { StatusCodes } = require('http-status-codes');

module.exports = async (id) => {
  const deleteTask = await deleteTaskModel(id);

  if (deleteTask.deletedCount === 0) {
    return { message: 'Sorry, task wasn\'t found.'}
  } else if (deleteTask.deletedCount > 0) {
    return { message: 'Task was successfully deleted.'}
  }
};