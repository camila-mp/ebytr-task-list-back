const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler/errorHandler');
const usersRouter = require('./controllers/users/router');
const loginRouter = require('./controllers/login/router');
const tasksRouter = require('./controllers/tasks/router');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/tasks', tasksRouter);

app.use(errorHandler);

module.exports = app;