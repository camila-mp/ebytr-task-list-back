const { connection } = require('../connection');
const { ObjectId } = require('mongodb');

module.exports = async (id, editedData) => {
  const { description, status, deadline } = editedData;
  const updateTask = await (await connection()).collection('tasks')
    .updateOne(
      { _id: ObjectId(id) },
      { $set: { 'task.status': status, 'task.description': description, 'task.deadline': deadline } });
 
  return updateTask;
};