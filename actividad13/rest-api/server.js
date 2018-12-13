//Imports
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
//Store object
let store = {}
store.accounts = []

//Express app
let app = express()

//Middleware
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

//GET
app.get('/accounts',(req,res)=>{
    res.status(200).send(store.accounts)
})

//SHOW
app.get('/accounts/:id',(req,res)=>{
    res.status(200).send(store.accounts[req.params.id])
})

//POST
app.post('/accounts',(req,res)=>{
    let newAccount = req.body
    let id = store.accounts.length
    store.accounts.push(newAccount)
    res.status(201).send({id: id})
})

//PUT
app.put('/accounts/:id',(req,res)=>{
    store.accounts[req.params.id] = req.body
    res.status(200).send(store.accounts[req.params.id])
})

//DELETE
app.delete('/accounts/:id',(req,res)=>{
    store.accounts.splice(req.params.id,1)
    res.status(204).send()
})

app.listen(3000)
