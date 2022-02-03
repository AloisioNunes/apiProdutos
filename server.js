const http = require('http');
const app = require('./app');
const port = process.env.PORT || 8080;
const server = http.createServer(app);

try {
    server.listen(port);
    console.log('Servidor funcionando');
} catch (exception) {
    throw exception;
}