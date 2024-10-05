const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Minha Página</title>
            </head>
            <body>
                <h1>Bem-vindo ao meu servidor Express!</h1>
                <p>Esta é uma página HTML simples.</p>
            </body>
        </html>
    `);
});


app.get('/api/data', (req, res) => {
    const dados = {
        nome: 'Seu Nome',
        idade: 25,
        profissao: 'Desenvolvedor',
    };
    res.json(dados);
});


app.listen(PORT, () => {
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
