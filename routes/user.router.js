const express = require('express')
const userController = require('../controllers/user.controller')

const userRouter = express.Router()

// custom middleware for userRouter
userRouter.use((req, res, next) => {
    console.log('IP Address', req.ip);
    next()
})

userRouter.get('/', userController.getAllUsers)
userRouter.get('/:id', userController.getUser)
userRouter.post('/', userController.createUser)

module.exports = userRouter
