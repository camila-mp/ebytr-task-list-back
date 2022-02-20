const express = require('express');
const tokenValidation = require('../../middlewares/validations/tokenValidation');
const idValidation = require('../../middlewares/validations/idValidation');
const createNewTask = require('./createTask');
const getAllTasks = require('./getAllTasks');
const updateTask = require('./updateTask');
const deleteTask = require('./deleteTask');

const router = express.Router();

router.post('/', tokenValidation, createNewTask);
router.get('/', tokenValidation, getAllTasks);
router.patch('/update/:id', idValidation, tokenValidation, updateTask);
router.delete('/:id', idValidation, tokenValidation, deleteTask);

module.exports = router;