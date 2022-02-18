const { StatusCodes } = require('http-status-codes');
const getAllTasks = require('../../services/tasks/getAllTasks');

module.exports = async (req, res, next) => {
  const { userId } = req;

  try {
    const allTasks = await getAllTasks(userId);

    return res.status(StatusCodes.OK).json(allTasks);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = StatusCodes.INTERNAL_SERVER_ERROR;
    next(err);
  }
};