const { StatusCodes } = require('http-status-codes');
const getTask = require('../../services/tasks/getById');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req;

  try {
    const task = await getTask(id, userId);

    if (!task) {
      const err = { 
        code: StatusCodes.UNAUTHORIZED,
        message: 'Sorry, you are not allowed to read this task because you are not the author.'
      }
      return next(err)
    }

    return res.status(StatusCodes.OK).json(task);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = StatusCodes.INTERNAL_SERVER_ERROR;
    next(err);
  }
};