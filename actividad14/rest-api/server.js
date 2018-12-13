//Imports
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes')
//Store object vacio
//let store = {}
//store.posts = []

//Rellenar store, para comprobar que funciona el get
let store = {
    "posts": [
        {
        "name": "POST numero 1",
        "url": "https://webapplog.com/es6",
        "text": "This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.",
        "comments": [
            {"text": "comentario 1 del post 1"},
            {"text": "Comentario 2 del post 1"},
            {"text": "Comentario 3 del post 1"}
        ]
        },
        {
            "name": "POST numero 2",
            "url": "https://webapplog.com/es6",
            "text": "This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.",
            "comments": [
                {"text": "comentario 1 del post 2"},
                {"text": "Comentario 2 del post 2"},
                {"text": "Comentario 3 del post 2"}
            ]
        }
    ]}
//Express app
let app = express()

//Middleware
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
//******START POST****//
//GET Consulta de todos los post del blog
app.get('/posts',(req,res)=>{
    routes.posts.getPosts(req,res,store)
})

//POST añadir un nuevo post
app.post('/posts',(req,res)=>{
    routes.posts.addPost(req,res,store)
})
//PUT actualizar un post
app.put('/posts/:id',(req,res)=>{
    routes.posts.updatePost(req,res,store)
})

//DELETE borrar un post
app.delete('/posts/:id',(req,res)=>{
    routes.posts.removePost(req, res, store)
})
//*****END POST*****//

//******START COMMENTS*****//
//GET Consulta de todos los comentarios de un post
app.get('/posts/:postId/comments',(req,res)=>{
    routes.comments.getComments(req,res,store)
})
//POST añadir un nuevo comentario
app.post('/posts/:postId/comments',(req,res)=>{
    routes.comments.addComment(req,res,store)
})
//PUT actualizar un comentario
app.put('/posts/:postId/comments/:commentId',(req,res)=>{
    routes.comments.updateComment(req,res,store)
})
//DELETE borrar un post
app.delete('/posts/:postId/comments/:commentId',(req,res)=>{
    routes.comments.removeComment(req, res, store)
})
//******END COMMENTS******//
app.listen(3000)
