const createTaskModel = require('../../models/tasks/createTask');
const { StatusCodes } = require('http-status-codes');

module.exports = async (userId, taskData) => {
  const { description, status, dateCreated, deadline } = taskData;
  if (!description || !status || !dateCreated || !deadline) {
    return { code: StatusCodes.BAD_REQUEST, message: 'Sorry, all task fields are required.' }
  }
  const newTask = await createTaskModel(userId, taskData);
  return newTask;
};