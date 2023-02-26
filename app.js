const http = require('http');
const path = require('path');
const fs = require('fs');
const methodOverride = require("method-override");
const express = require('express');

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());
// Configurando pasta estática para acesso externo (onde ficam as imagens e css)
app.use(express.static(path.join(__dirname, "public")));
// Configurando a view engine para ejs
app.set("view engine", "ejs");
// indicando o caminho das nossas views
app.set("views", path.join(__dirname, "src", "views"));
//Configurando o methodOverride no express
app.use(methodOverride("_method"));
// Convertendo corpo da requisição (body) em objeto literal
app.use(express.json());
//url encoded serve para a gente converter a carga da requisição em um formato que o json aceite
app.use(express.urlencoded({ extended: false }));
// Inicializando cookieParser
app.use(cookieParser());

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, 'localhost', () => {
  console.log('Servidor iniciado em http://localhost:3000');
});




