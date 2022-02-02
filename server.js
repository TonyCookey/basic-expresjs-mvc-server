const express = require('express')
const path = require('path')
const PORT = 3000

const app = express()
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


const userRouter = require('./routes/user.router')
const logMiddleware = require('./middlewares/log.middleware')


// logging middleware
app.use(logMiddleware)

// json parsing middleware
app.use(express.json())

// serving static files in the public folder
app.use('/site', express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', (req, res) => {
    res.render('index', {
        title: 'NFT Store',
        heading: 'NFT Marketplace',
        caption: 'Get your all your NFTs, coins and tokens in one place '
    })
})
// user routes - userRouter
app.use('/users', userRouter)



// start the express server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
