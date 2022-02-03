const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var Produto = require('../model/produto');
var produto = new Produto();

//

router.use(bodyParser.json());

// Rota cadastrar produto por POST

router.post('/',async (request,response) => {
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

router.get('/',async (request,response) => {
    try {
        let produtos = await produto.consultarTodos();
        response.status(200).send(produtos.rows);
    } catch (exception) {
        response.status(400).send({mensagem: "Ocorreu um erro desconhecido"});
    }
});

// Rota que detalha um produto

router.get('/:produto_id',async (request,response) => {
    console.log('Caiu no produto_id');
    let produto_id = request.params.produto_id;
    if (produto_id) {
        try {
            let resultado = await produto.consultarId(produto_id);
            response.status(200).send(resultado.rows);
        } catch (exception) {
            response.status(400).send({mensagem: "Ocorreu um erro desconhecido"});
        }
    }
});

// Rota que remove um produto

router.delete('/:produto_id',async (request,response) => {
    let produto_id = request.params.produto_id;
    if (produto_id) {
        try {
            let resultado = await produto.remover(produto_id);
            response.status(200).send({mensagem: "Produto excluído com sucesso"});
        } catch (exception) {
            response.status(400).send({mensagem: "Ocorreu um erro desconhecido"});
        }
    }
});

module.exports = router;