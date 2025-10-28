const AuthController = require('../controllers/auth.controller');

const authRouter = require('express').Router();

authRouter.post('/signup', AuthController.signup);
authRouter.get('/refresh', AuthController.refresh);
authRouter.delete('/signout', AuthController.signout);
authRouter.post('/signin', AuthController.signin);

module.exports = authRouter;