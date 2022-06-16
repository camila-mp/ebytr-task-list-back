const updateTaskModel = require('../../models/tasks/updateTask');
const getById = require('../../models/tasks/getById');
const { StatusCodes } = require('http-status-codes');

module.exports = async (id, taskData, crrUserId) => {
  const targetTask = await getById(id);
  const { userId } = targetTask;

  if (crrUserId.toString() === userId.toString()) {
    const updateResult = await updateTaskModel(id, taskData);
    if (updateResult.modifiedCount === 0) {
      return { code: StatusCodes.NOT_FOUND, message: 'Sorry, no task with the provided id was found.' }
    } else if (updateResult.modifiedCount > 0) {
      return { code: StatusCodes.OK, message: 'Task was successfully modified.'}
    }
  }

  if (crrUserId.toString() !== userId.toString()) {
    return false;
  }
};