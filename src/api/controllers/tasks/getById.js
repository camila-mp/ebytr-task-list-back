const { StatusCodes } = require('http-status-codes');
const getTask = require('../../services/tasks/getById');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await getTask(id);

    return res.status(StatusCodes.OK).json(task);
  } catch (err) {
    err.message = 'Internal server error';
    err.code = StatusCodes.INTERNAL_SERVER_ERROR;
    next(err);
  }
};