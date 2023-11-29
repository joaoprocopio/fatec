CREATE TABLE tbl_cursos (
  id_curso SERIAL,
  nome_curso TEXT,
  instrutor TEXT,

  PRIMARY KEY (id_curso)
);

CREATE TABLE tbl_alunos (
  id_aluno SERIAL,
  primeiro_nome TEXT,
  sobrenome TEXT,
  idade INT,

  PRIMARY KEY (id_aluno)
);

CREATE TABLE tbl_alunos_cursos (
  id_curso INT,
  id_aluno INT,

  FOREIGN KEY (id_curso) REFERENCES tbl_cursos(id_curso),
  FOREIGN KEY (id_aluno) REFERENCES tbl_alunos(id_aluno)
);

CREATE TABLE tbl_atividades (
  id_atividade SERIAL,
  nome_atividade TEXT,
  data_entrega DATE,
  id_aluno INT,

  PRIMARY KEY (id_atividade),

  FOREIGN KEY (id_aluno) REFERENCES tbl_alunos(id_aluno)
);

INSERT INTO tbl_alunos (primeiro_nome, sobrenome, idade) VALUES
('Alice', 'Silva', 20),
('Bod', 'Johnson', 22),
('Charlie', 'Brown', 21),
('David', 'Miller', 23),
('Eva', 'Davis', 22);

INSERT INTO tbl_cursos (nome_curso, instrutor) VALUES
('Matematica', 'Dr. Johnson'),
('Ciencia da Computacao', 'Prof. Silva'),
('Historia', 'Dr. Davis'),
('Fisica', 'Prof. Miller'),
('Ingles', 'Dr. Wilson');

INSERT INTO tbl_alunos_cursos (id_aluno, id_curso) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO tbl_atividades (nome_atividade, data_entrega, id_aluno) VALUES
('Atividade 1', '2023-12-01', 1),
('Atividade 2', '2023-12-15', 2),
('Atividade 3', '2023-12-10', 3),
('Atividade 4', '2023-12-05', 4),
('Atividade 5', '2023-11-30', 5);
