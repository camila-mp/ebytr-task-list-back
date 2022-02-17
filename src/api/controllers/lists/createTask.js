const { StatusCodes } = require('http-status-codes');
const createNewTask = require('../../services/lists/createTask');

module.exports = async (req, res, next) => {
  const { userId } = req;
  const taskData = req.body;
  
  try {
    const newTask = await createNewTask(userId, taskData);
    return res.status(StatusCodes.OK).json(newTask);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = StatusCodes.INTERNAL_SERVER_ERROR;
    next(err);
  }
};