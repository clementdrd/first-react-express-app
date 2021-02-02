const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const userRouter = require('./routes/user-router')

const app = express()
const apiPort = 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

console.log("YOOOOOO 1 from main index.js");

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

console.log("TOTO");

app.use('/api', userRouter)

console.log("YOOOOOO3 from main index.js");

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
