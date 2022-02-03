const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var Produto = require('../model/produto');
var produto = new Produto();

//

router.use(bodyParser.json());

// Rota cadastrar produto por POST

router.post('/compras',async (request,response) => {
    let body = request.body;
    if (body.nome && body.valor_unitario && body.qtde_estoque) {
        try {
            await produto.adicionar(body);
            response.status(200).send({mensagem: "Produto cadastrado"});
        } catch (exception) {
            console.log(exception);
            response.status(400).send({mensagem: "Ocorreu um erro desconhecido"});
        }
    } else {
        response.status(412).send({mensagm: "Os valores informados não são validos"});
    }
});

// Rota que retorna todos os produtos

module.exports = router;