
const { gerarNumeroAleatorio } = require('./utils');
const http = require('http');

const requestListener = function (req, res) {
    if (req.url === "/numero") {
        res.end(gerarNumeroAleatorio().toString())
    } else {
        res.writeHead(404);
        res.end("Pagina nao encontrada");
    }
};

const server = http.createServer(requestListener);
server.listen(8000, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:8000");
});
