const parse = require('nodemon/lib/cli/parse');
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {Atendimento.lista(res)}); // comando get, é um metodo que pega a requisição recebida nos antedimentos (dentro da porta 3000) e devolve uma resposta, req e res
    // Uso o post p/ enviar dados ao nosso servidor, digamos que o cliente precisa preencher um formulário, consequetemente ele precisa enviar dados x, então...
    
    app.get('/atendimentos/:id', (req,res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorID(id, res)
    })
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)
    });

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id,valores,res)
    })

    app.delete('/atendimentos/:id', (req,res) => {
        const id = parseInt(req.params.id)
        Atendimento.deleta(id, res)
    })
}
