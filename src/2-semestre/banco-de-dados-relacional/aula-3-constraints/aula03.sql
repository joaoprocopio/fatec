-- Cria o banco
DROP DATABASE IF EXISTS aula_03_db;
CREATE DATABASE aula_03_db;

-- Conecta no banco
\c aula_03_db;

-- Cria as tabelas
CREATE TABLE tbl_cliente (
  codigo_cliente SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  cidade TEXT,
  endereco TEXT
);

CREATE TABLE tbl_titulo (
  codigo_titulo SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  descricao TEXT,
  categoria TEXT
);

CREATE TABLE tbl_emprestimo (
  numero_emprestimo SERIAL PRIMARY KEY,
  codigo_cliente INT,
  codigo_livro INT
);

CREATE TABLE tbl_livros (
  cod_livro SERIAL PRIMARY KEY,
  codigo_titulo INT,
  status TEXT
);

-- Cria as constraints
ALTER TABLE tbl_emprestimo
ADD CONSTRAINT fk_cliente
FOREIGN KEY (codigo_cliente)
REFERENCES tbl_cliente(codigo_cliente);

ALTER TABLE tbl_emprestimo
ADD CONSTRAINT fk_livro
FOREIGN KEY (codigo_livro)
REFERENCES tbl_livros(cod_livro);

ALTER TABLE tbl_livros
ADD CONSTRAINT fk_titulo
FOREIGN KEY (codigo_titulo)
REFERENCES tbl_titulo(codigo_titulo);

-- Cria os domínios
CREATE DOMAIN titulo_categorias AS TEXT
CHECK (VALUE IN ('DRAMA', 'COMEDIA'));

CREATE DOMAIN livro_status AS TEXT
CHECK (VALUE IN ('DISPONIVEL', 'ALUGADO'));

-- Altera os campos para os domínios
ALTER TABLE tbl_titulo
ALTER COLUMN categoria SET DATA TYPE titulo_categorias;

ALTER TABLE tbl_livros
ALTER COLUMN status SET DATA TYPE livro_status; -- Gostaria de atribuir um valor DEFAULT='DISPONIVEL' para o campo mas o valor DEFAULT só pode ser atribuído na criação da tabela.
