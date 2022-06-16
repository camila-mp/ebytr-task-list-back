const getTaskById = require('../../models/tasks/getById');

module.exports = async (id, crrUserId) => {
  const task = await getTaskById(id);
  const { userId } = task;

  if (crrUserId.toString() === userId.toString()) {
    return getTaskById(id)
  }

  else if (crrUserId.toString() !== userId.toString()) {
    return false; 
  }
};