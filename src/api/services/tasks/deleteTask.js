const deleteTaskModel = require('../../models/tasks/deleteTask');
const { StatusCodes } = require('http-status-codes');

module.exports = async (id) => {
  const deleteTask = await deleteTaskModel(id);

  if (deleteTask.deletedCount === 0) {
    return { code: StatusCodes.NOT_FOUND, message: 'Sorry, no task with the provided id was found.' }
  } else if (deleteTask.deletedCount > 0) {
    return { code: StatusCodes.OK, message: 'Task was successfully deleted.'}
  }
};