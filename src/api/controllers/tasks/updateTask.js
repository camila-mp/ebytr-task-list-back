const { StatusCodes } = require('http-status-codes');
const updateService = require('../../services/tasks/updateTask');

module.exports = async (req, res, next) => {
  const taskData = req.body;
  const { id } = req.params;
  const { userId } = req;

  try {
    const updateTask = await updateService(id, taskData, userId);
    if (!updateTask) {
      const err = { 
        code: StatusCodes.UNAUTHORIZED,
        message: 'Sorry, you are not allowed to read this task because you are not the author.'
      }
      return next(err);
    }

    return res.status(StatusCodes.OK).json(updateTask);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = StatusCodes.INTERNAL_SERVER_ERROR;
    next(err);
  }
};