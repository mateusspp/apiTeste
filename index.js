const express = require ('express');

const app = express (); //comando que informa o aplicativo que sera informado no servidor quando ele começar a rodar

app.listen(3000,() => console.log('Servidor rodando na porta 3000')); // O comando listen informa que o app esperamos algo na porta 3000 do nosso servidor e o console informa que o app está esperando

app.get('/antedimentos', (req, res) => res.send ('Você está na rota de atendimentos')); // comando get, é um metodo que pega a requisição recebida nos antedimentos (dentro da porta 3000) e devolve uma resposta, req e res