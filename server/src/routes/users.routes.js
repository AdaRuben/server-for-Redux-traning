const UsersController = require('../controllers/users.controllers');
const userRouter = require('express').Router();

userRouter.get('/', UsersController.getAllUsers);

module.exports = userRouter;