const mysql = require('mysql');
const moment = require('moment');

const connection = mysql.createConnection({
  host: 'Vaicurintia',
  user: 'root',
  password: 'senha',
  database: 'estoque'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados');
  
  connection.query('SELECT * FROM estoque', (err, results) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err);
      return;
    }
    results.forEach((produto) => {
      const diasRestantes = moment(produto.validade).diff(moment(), 'days');
      if (diasRestantes <= 30) {
        console.log(`O produto ${produto.nome} está vencendo em ${diasRestantes} dias.`);
      }
    });
    connection.end();
  });
});
