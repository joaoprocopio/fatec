DROP DATABASE IF EXISTS aula_03_db;
CREATE DATABASE aula_03_db;

\c aula_03_db;

CREATE TABLE tbl_cliente (
  codigo_cliente SERIAL PRIMARY KEY,
  nome VARCHAR(128) NOT NULL,
  cidade VARCHAR(64),
  endereco VARCHAR(256)
);

CREATE TABLE tbl_titulo {
  codigo_titulo SERIAL PRIMARY KEY,
  titulo VARCHAR(128) NOT NULL,
  descricao VARCHAR(512),
  categoria VARCHAR(32)
};

CREATE TABLE tbl_emprestimo {
  numero_emprestimo SERIAL PRIMARY KEY,
}
