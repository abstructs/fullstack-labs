const express = require('express')
const app = express()

app.listen(3000)

const requestTime = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime)

app.get('/greet', (req, res) => {
    res.send('Hello world! - GET')
})

app.post('/greet', (req, res) => {
    res.send('Hello world! - POST')
})

app.delete('/greet', (req, res) => {
    res.send('Hello world! - DELETE')
})

app.put('/greet', (req, res) => {
    res.send('Hello world! - PUT')
})