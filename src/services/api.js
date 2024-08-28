import axios from 'axios'

// git clone https://github.com/Pedro142Lima/ReactNative.git
// cd ReactNative
// npm install  
// npm i -g expo-cli
// npm i axios 

const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// Configure sua conexão MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL');
});

// Rota de exemplo para obter dados
app.get('/dados', (req, res) => {
  db.query('SELECT * FROM sua_tabela', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor backend rodando na porta 3000');
});

