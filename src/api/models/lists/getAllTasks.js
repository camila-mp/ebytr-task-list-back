const { connection } = require('../connection');

module.exports = async (userId) => {
  const all = await (await connection()).collection('tasks').find({ userId }).toArray();
  const allTasks = { tasks: all };
  return allTasks;
};