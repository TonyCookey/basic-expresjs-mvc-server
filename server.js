const express = require('express')

const userController = require('./controllers/user.controller')
const app = express()
const PORT = 3000

const users = [
    {
        id: 1,
        name: 'Tony Cookey'
    },
    {
        id: 2,
        name: 'Anthony Cookey'
    }
]

// middlewares
app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method}: ${req.url} , ${delta}ms`);
})

app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method}: ${req.url} , ${delta}ms`);
})

// json parsing middleware
app.use(express.json())


// routes
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/users', userController.getAllUsers)
app.get('/user/:id', userController.getUser)
app.post('/users', userController.createUser)



// start the express server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
