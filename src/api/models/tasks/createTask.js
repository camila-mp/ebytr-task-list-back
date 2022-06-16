const { connection } = require('../connection');

module.exports = async (userId, taskData) => {
  const newTask = await (await connection()).collection('tasks')
    .insertOne({ userId, task: taskData });

  return ({ _id: newTask.insertedId, userId, task: taskData });
};
