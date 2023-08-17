DROP DATABASE IF EXISTS aula_03_db;
CREATE DATABASE aula_03_db;

\c aula_03_db;

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
  codigo_cliente TEXT,
  codigo_livro TEXT
);

CREATE TABLE tbl_livros (
  cod_livro SERIAL PRIMARY KEY,
  codigo_titulo INT,
  status TEXT
);
