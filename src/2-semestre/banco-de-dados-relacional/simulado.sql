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

