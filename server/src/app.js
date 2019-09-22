console.log("Hello")
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'hello WoRLD!'
    })
})

app.get('/easteregg', (req, res) => {
    res.send({
        message: "Ya'll wanna see a dead body?"
    })
})

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email} You user has been registered successfully!`
    })
})

app.listen(process.env.PORT || 8081)
