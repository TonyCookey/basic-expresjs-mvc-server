const express = require('express')

const app = express()

const PORT = 3000

const users = [{
    id: 1,
    name: 'Tony Cookey'
}, {
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

// json parsing middleware
app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start

    console.log(`${req.method}: ${req.url} , ${delta}ms`);
})

// routes
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id
    if (users[id - 1]) {
        return res.status(200).json(users[id - 1])
    } else {
        res.status(404).json({
            status_code: 404,
            message: 'Could not find user'
        })
    }
})
app.post('/users', (req, res) => {
    if (!req.body.name) {
        res.status(400).json({
            error: 'missing user name'
        })
    }
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    }
    users.push(newUser)
    res.status(201).json({
        message: 'Successfully added user'
    })
})



// start the express server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
