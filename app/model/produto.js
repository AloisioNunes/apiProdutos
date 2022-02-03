const Banco = require('../database/db-pg');

class Produto {

    db = new Banco();

    async adicionar(body) {

        let sql = `INSERT INTO produto(nome,valor_unitario,qtde_estoque) VALUES ('${body.nome}',${body.valor_unitario},${body.qtde_estoque})`;
        try {
            await this.db.inserir(sql);
            return true;
        } catch (exception) {
            throw exception;
        }
    }

    async consultarId(produto_id) {
        let sql = `SELECT * FROM produto WHERE produto_id = ${produto_id}`;
        try {
            let resultado = await this.db.consultar(sql);
            return resultado;
        } catch (exception) {
            throw exception;
        }
    }

    async consultarTodos() {
        let sql = 'SELECT * FROM produto';
        try {
            let resultado = await this.db.consultar(sql);
            return resultado;
        } catch (exception) {
            throw exception;
        }
    }

    async remover(produto_id) {
        let sql = `DELETE FROM produto WHERE produto_id = ${produto_id}`;
        try {
            let resultado = await this.db.deletar(sql);
            return resultado;
        } catch (exception) {
            throw exception;
        }
    }

}

module.exports = Produto;