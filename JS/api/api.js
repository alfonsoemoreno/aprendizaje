const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

app.use(express.json())
mongoose.connect('SECRET-MIAPP')

app.get('/Users', user.list)
app.post('/Users', user.create)
app.get('/Users/:id', user.get)
app.put('/Users/:id', user.update)
app.patch('/Users/:id', user.update)
app.delete('/Users/:id', user.destroy)

app.use(express.static('app'))

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req, res) => {
    res.status(404).send('Esta página no existe')
})

app.listen(port, () => {
    console.log(('Arrancando la aplicación'))
})