const http = require('http');

const requestListener = function (req, res) {
    if (req.url === "/") { 
        res.writeHead(200);
        res.end("Bem-vindo");
    } else {
        res.writeHead(404);
        res.end("404 - Página não encontrada");
    }
};


const server = http.createServer(requestListener);
server.listen(8000, 'localhost', () => { 
    console.log("Servidor : http://localhost:8000");
});