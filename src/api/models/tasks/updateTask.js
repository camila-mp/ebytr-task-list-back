const { connection } = require('../connection');
const { ObjectId } = require('mongodb');

module.exports = async (id, taskData) => {
  const updateTask = await (await connection()).collection('tasks')
    .updateOne(
      { _id: ObjectId(id) },
      { $set: { task: taskData } }
    );
 
  return updateTask;
};