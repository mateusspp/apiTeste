const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'gatorosa',
    database: 'agendaPetshop'
})

module.exports = conexao