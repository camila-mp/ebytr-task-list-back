const { connection } = require('../connection');

module.exports = async (userId, taskData) => {
  await (await connection()).collection('tasks')
    .insertOne({ userId, task: taskData });

  return ({ userId, task: taskData });
};
