

// git clone https://github.com/Pedro142Lima/ReactNative.git
// cd ReactNative
// npm install  
// npm i -g expo-cli
// npm i axios 

import express from 'express';
import mysql from 'mysql2';


const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'testedoreact'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL');
});

app.get('/dados', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Servidor backend rodando na porta 3000');
});
