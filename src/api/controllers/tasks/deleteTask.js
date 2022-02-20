const deleteTaskService = require('../../services/tasks/deleteTask');
const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deleteTask = await deleteTaskService(id);

    if (deleteTask.message) {
      return next(deleteTask);
    }

    return res.status(StatusCodes.OK).json(deleteTask);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = StatusCodes.INTERNAL_SERVER_ERROR;
    next(err);
  }
};