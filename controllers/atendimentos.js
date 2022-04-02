// Criamos essa pasta, pois o index.js estava execuntado muitas funções ao mesmo tempo, executa o servidor, ouvia a porta e gerenciava a rota de antedimentos

//Exportamos e ao mesmo tempo criamos uma função app, p/ ser possível exportar a função app, a função app que tem dentro o app.get
module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send ('Você está na rota de atendimentos.')); // comando get, é um metodo que pega a requisição recebida nos antedimentos (dentro da porta 3000) e devolve uma resposta, req e res
    // Uso o post p/ enviar dados ao nosso servidor, digamos que o cliente precisa preencher um formulário, consequetemente ele precisa enviar dados x, então...
    app.post('/atendimentos', (req, res) => res.send('Você está na rota de antedimentso e esta realizando um POST'));
}
