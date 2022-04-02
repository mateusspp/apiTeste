const express = require('express') 
const consign = require('consign');
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    
    consign()
        .include('controllers')
        .into(app)

    return app
}

//A pasta config foi criada p/ ser referente as configurações referentes à aplicacao apenas
//consign agrupa todas as rotas (agr só há uma em controles) e assim irá passar/colocar p/ rodar todos os módulos dentro do app via into app e return nele