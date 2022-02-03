var express = require("express");
var app = express();

const rotaProdutos = require('./app/routes/produtos');
const rotaCompras = require('./app/routes/compras');
app.use('/api/produtos',rotaProdutos);
app.use('/api/compras',rotaCompras);

module.exports = app;