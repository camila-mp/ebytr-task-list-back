const getTaskById = require('../../models/tasks/getById');

module.exports = async (id) => {
  const task = await getTaskById(id);
  return task;
};