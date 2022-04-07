const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send ('Você está na rota de atendimentos.')); // comando get, é um metodo que pega a requisição recebida nos antedimentos (dentro da porta 3000) e devolve uma resposta, req e res
    // Uso o post p/ enviar dados ao nosso servidor, digamos que o cliente precisa preencher um formulário, consequetemente ele precisa enviar dados x, então...
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento)
        res.send('Post atendimento')
    });
}
