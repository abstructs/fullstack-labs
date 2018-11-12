const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://admin:badpassword1@ds129233.mlab.com:29233/testdb_lab6')

const port = process.env.PORT || 3000

app.listen(port)

const Schema = mongoose.Schema
const userSchema = new Schema({name: String, status: String})

const User = mongoose.model('User', userSchema)

const john = User({ name: 'John', status: 'active'})

const jane = User({ name: 'Jane', status: 'active'})

john.save((err) => {
    if(err) throw err

    console.log('**** User Saved! ****')
})

jane.save((err) => {
    if(err) throw err

    console.log('**** User Saved! ****')
})