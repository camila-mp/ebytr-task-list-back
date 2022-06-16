const updateTaskModel = require('../../models/tasks/updateTask');
const { StatusCodes } = require('http-status-codes');

module.exports = async (id, taskData, userId) => {
  const updateTask = await updateTaskModel(id, taskData);

  if (updateTask.modifiedCount === 0) {
    return { code: StatusCodes.NOT_FOUND, message: 'Sorry, no task with the provided id was found.' }
  } else if (updateTask.modifiedCount > 0) {
    return { code: StatusCodes.OK, message: 'Task was successfully modified.'}
  }
  return updateTask;
};