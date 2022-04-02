const express = require ('express');

const app = express (); //comando que informa o aplicativo que sera informado no servidor quando ele começar a rodar, executando o servidor

app.listen(3000,() => console.log('Servidor rodando na porta 3000')); // O comando listen informa que o app esperamos algo na porta 3000 do nosso servidor e o console informa que o app está esperando

//Eu joguei o bagulho pra outra pasta e instalei um modulo (npm install consign) que permite agrupar todas as rotas que formos criando dentro do app, assim, seŕa possível o app aqui acessar a rota de antedimentos