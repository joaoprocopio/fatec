CREATE TABLE tbl_departamentos (
  id_departamento SERIAL,
  nome_departamento TEXT,

  PRIMARY KEY (id_departamento)
);

CREATE TABLE tbl_funcionarios (
  id_funcionario SERIAL,
  primeiro_nome TEXT,
  sobrenome TEXT,
  salario REAL,

  PRIMARY KEY (id_funcionario)
);

CREATE TABLE tbl_funcionario_departamento (
  id_funcionario INT,
  id_departamento INT,

  FOREIGN KEY (id_funcionario) REFERENCES tbl_funcionarios(id_funcionario),
  FOREIGN KEY (id_departamento) REFERENCES tbl_departamentos(id_departamento)
);

CREATE TABLE tbl_tarefas (
  id_tarefa SERIAL,
  nome_tarefa TEXT,
  prazo DATE,
  id_funcionario INT,

  PRIMARY KEY (id_tarefa),

  FOREIGN KEY (id_funcionario) REFERENCES tbl_funcionarios(id_funcionario)
);

INSERT INTO tbl_departamentos (nome_departamento) VALUES
('TI'),
('RH'),
('Finanças'),
('Marketing'),
('Vendas');

INSERT INTO tbl_funcionarios (primeiro_nome, sobrenome, salario) VALUES
('Clara', 'Ribeiro', 65000),
('Rodrigo', 'Costa', 80000),
('Juliana', 'Almeida', 90000),
('Marcio', 'Cunha', 72000),
('Helena', 'Lima', 68000);

INSERT INTO tbl_funcionario_departamento (id_funcionario, id_departamento) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 5);

INSERT INTO tbl_tarefas (nome_tarefa, prazo, id_funcionario) VALUES
('Tarefa 1', '2023-12-01', 1),
('Tarefa 2', '2023-12-15', 2),
('Tarefa 3', '2023-12-10', 3),
('Tarefa 4', '2023-12-05', 4),
('Tarefa 5', '2023-11-30', 5);

CREATE VIEW v_funcionarios_salario_alto AS
SELECT
  UPPER(f.primeiro_nome) AS primeiro_nome,
  f.salario AS salario
FROM 
  tbl_funcionarios As f
WHERE salario > 70000;
