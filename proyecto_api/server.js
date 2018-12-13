//Imports
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes')
const fs = require("fs")

// Obtengo el contenido del fichero
var conts = fs.readFileSync("proyecto.json")
// Y lo formateo a JSON.
var store = JSON.parse(conts)

//Express app
let app = express()

//Middleware
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
//******START DISHES****//
//GET Consulta de todos los platos
app.get('/dishes',(req,res)=>{
    routes.dishes.getDishes(req,res,store)
})
//GET Consulta de un platos
app.get('/dishes/:id',(req,res)=>{
    routes.dishes.getDish(req,res,store)
})
//POST añadir un nuevo plato
app.post('/dishes',(req,res)=>{
    routes.dishes.addDishes(req,res,store)
    //Escribo en el fichero para guardar el elemento
    fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//PUT actualizar un plato
app.put('/dishes/:id',(req,res)=>{
    routes.dishes.updateDish(req,res,store)
    //Escribo en el fichero para guardar el elemento
    fs.writeFileSync("proyecto.json", JSON.stringify(store))
})

//DELETE borrar un plato
app.delete('/dishes/:id',(req,res)=>{
    routes.dishes.removeDish(req, res, store)
    //Escribo en el fichero para guardar el elemento
    fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//*****END DISHES*****//

//******START COMMENTS*****//
//GET Consulta de todos los comentarios de un plato
app.get('/dishes/:dishId/comments',(req,res)=>{
    routes.comments.getComments(req,res,store)
})

app.get('/dishes/:dishId/comments/:commentId',(req,res)=>{
    routes.comments.getComment(req,res,store)
})
//POST añadir un nuevo comentario
app.post('/dishes/:dishId/comments',(req,res)=>{
    routes.comments.addComment(req,res,store)
    //Escribo en el fichero para guardar el elemento
    fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//PUT actualizar un comentario
app.put('/dishes/:dishId/comments/:commentId',(req,res)=>{
    routes.comments.updateComment(req,res,store)
    //Escribo en el fichero para guardar el elemento
    fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//DELETE borrar un comentario
app.delete('/dishes/:dishId/comments/:commentId',(req,res)=>{
    routes.comments.removeComment(req, res, store)
    //Escribo en el fichero para guardar el elemento
    fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//******END COMMENTS******//

//******START PROMOTIONS*****//
//GET Consulta de todos las promociones
app.get('/promotions',(req,res)=>{
    routes.promotions.getPromotions(req,res,store)
})
//GET Consulta de una promocion
app.get('/promotions/:id',(req,res)=>{
    routes.promotions.getPromotion(req,res,store)
})
//POST añadir una nueva promoción
app.post('/promotions',(req,res)=>{
    routes.promotions.addPromotions(req,res,store)
    //Escribo en el fichero para guardar el elemento
    fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//PUT actualizar una promoción
app.put('/promotions/:id',(req,res)=>{
    routes.promotions.updatePromotion(req,res,store)
    //Escribo en el fichero para guardar el elemento
    fs.writeFileSync("proyecto.json", JSON.stringify(store))
})

//DELETE borrar un plato
app.delete('/promotions/:id',(req,res)=>{
    routes.promotions.removePromotion(req, res, store)
    //Escribo en el fichero para guardar el elemento
    fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//******END PROMOTIONS******//

//******START LEADERS*****//
//GET Consulta de los leaders
app.get('/leaders',(req,res)=>{
    routes.leaders.getLeaders(req,res,store)
})
//GET Consulta de un leaders
app.get('/leaders/:id',(req,res)=>{
    routes.leaders.getLeader(req,res,store)
})
//POST añadir una nuevo leaders
app.post('/leaders',(req,res)=>{
    routes.leaders.addLeaders(req,res,store)
    //Escribo en el fichero para guardar el elemento
    fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//PUT actualizar un leader
app.put('/leaders/:id',(req,res)=>{
    routes.leaders.updateLeaders(req,res,store)
    //Escribo en el fichero para guardar el elemento
    fs.writeFileSync("proyecto.json", JSON.stringify(store))
})

//DELETE borrar un leader
app.delete('/leaders/:id',(req,res)=>{
    routes.leaders.removeLeader(req, res, store)
    //Escribo en el fichero para guardar el elemento
    fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//******END LEADERS******//
app.listen(3000)
