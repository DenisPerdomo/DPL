const express = require('express');
const morgan = require('morgan');
var app=express();

app.use(morgan('combined'))

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index',
    {title:'Guru99', message:'Welcome con start'})
});

app.get('/about', function(req, res) {
    res.render('about',
    {title:'Sobre Denis Perdomo', titulo:'Información',
    nombre:'Nombre: Denis Perdomo', edad:'Edad: 30', oficio:'Oficio: Técnico de Sistemas Informáticos'})
});

var server = app.listen(3000, function(){
});
