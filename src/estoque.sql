CREATE DATABASE estoque_db;

USE estoque_db;

CREATE TABLE estoque (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  validade DATE NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO estoque (nome, validade)
VALUES
  ('Produto A', '2023-05-01'),
  ('Produto B', '2022-12-31'),
  ('Produto C', '2023-02-28');
  
SELECT * FROM estoque_db;


