const express = require('express')
const userController = require('../controllers/user.controller')

const userRouter = express.Router()

userRouter.get('/', userController.getAllUsers)
userRouter.get('/:id', userController.getUser)
userRouter.post('/', userController.createUser)

module.exports = userRouter
