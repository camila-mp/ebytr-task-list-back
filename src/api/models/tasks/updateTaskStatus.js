const { connection } = require('../connection');
const { ObjectId } = require('mongodb');

module.exports = async (id, status) => {
  const updateTask = await (await connection()).collection('tasks')
    .updateOne({ _id: ObjectId(id) }, { $set: { 'task.status': status } });
 
  return updateTask;
};