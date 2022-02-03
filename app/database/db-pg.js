class Banco {

    async conectar() {
        const Client = require('pg').Client;
        const cliente = new Client({
            user: "postgres",
            password: "",
            host: "localhost",
            port: 5432,
            database: "produtos"
        });
        return cliente;
    }
    
    async consultar(query) {
    
        let cliente = await this.conectar();
        try {
            await cliente.connect();
            const resultado = await cliente.query(query);
            return resultado;
        } catch (exception) {
            throw exception;
        } finally {
            await cliente.end();
        }
    
    }
    
    async inserir(query) {
    
        let cliente = await this.conectar();
        try {
            await cliente.connect();
            await cliente.query(query);
        } catch (exception) {
            throw exception;
        } finally {
            await cliente.end();
        }
    
    }

    async deletar(query) {
        let cliente = await this.conectar();
        try {
            await cliente.connect();
            let resultado = await cliente.query(query);
            return resultado;
        } catch (exception) {
            throw exception;
        } finally {
            await cliente.end();
        }
    }

}

module.exports = Banco;