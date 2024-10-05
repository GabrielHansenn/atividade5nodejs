const http = require('http');

const requestListener = function (req, res) {
    if (req.url === "/") { 
    res.writeHead(200);
    res.end("Bem vindo!");
    } else if (req.url === "/sobre") {
    res.writeHead(200);
    res.end("Gabriel Hansen, 19 anos");

    } else if (req.url === "/contato") {
    res.writeHead(200);
    res.end("Numero: 42999616917, email: engs-gabrielandrade@camporeal.edu.br");

    } else { 
    res.writeHead(404);
    res.end("Pagina nao encontrada");
    }
};
const server = http.createServer(requestListener); 
server.listen(8000, 'localhost', () => { 
    console.log("Servidor está rodando em http://localhost:8000");
});