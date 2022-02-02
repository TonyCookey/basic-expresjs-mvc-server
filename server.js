const express = require('express')
const app = express()
const PORT = 3000

const userRouter = require('./routes/user.router')
const logMiddleware = require('./middlewares/log.middleware')


// logging middleware
app.use(logMiddleware)

// json parsing middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('Hello from ExpressJS App')
})
// user routes - userRouter
app.use('/users', userRouter)


// start the express server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
