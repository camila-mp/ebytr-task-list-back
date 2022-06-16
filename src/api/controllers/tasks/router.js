const express = require('express');
const tokenValidation = require('../../middlewares/validations/tokenValidation');
const idValidation = require('../../middlewares/validations/idValidation');
const createNewTask = require('./createTask');
const getAllTasks = require('./getAllTasks');
const getTaskById = require('./getById');
const updateTask = require('./updateTask');
const deleteTask = require('./deleteTask');

const router = express.Router();

router.post('/', tokenValidation, createNewTask);
router.get('/', tokenValidation, getAllTasks);
router.get('/:id', idValidation, tokenValidation, getTaskById);
router.patch('/update/:id', idValidation, tokenValidation, updateTask);
router.delete('/:id', idValidation, tokenValidation, deleteTask);

module.exports = router;