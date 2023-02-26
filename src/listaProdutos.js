const moment = require('moment');

// Lista de produtos do estoque
const estoque = [
    {
      nome: 'Produto A',
      validade: moment('2023-05-01')
    },
    {
      nome: 'Produto B',
      validade: moment('2022-12-31')
    },
    {
      nome: 'Produto C',
      validade: moment('2023-02-28')
    }
  ];
  
  // Verifica a validade dos produtos do estoque
  estoque.forEach(produto => {
    const diasRestantes = produto.validade.diff(moment(), 'days');
    if (diasRestantes <= 30) {
      console.log(`O produto ${produto.nome} está vencendo em ${diasRestantes} dias.`);
    }
  });

  module.exports = estoque;