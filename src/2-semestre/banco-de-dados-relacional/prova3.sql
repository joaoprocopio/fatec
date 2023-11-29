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

CREATE VIEW v_alunos_ciencia_computacao AS
SELECT
  a.primeiro_nome,
  a.sobrenome,
  c.nome_curso
FROM
  tbl_alunos AS a
JOIN
  tbl_alunos_cursos AS ac
On
  a.id_aluno = ac.id_aluno
JOIN
  tbl_cursos AS c
ON
  ac.id_curso = c.id_curso
WHERE
  c.nome_curso = 'Ciencia da Computacao';

CREATE PROCEDURE sp_atribuir_atividade_aluno(_id_atividade INT, _id_aluno INT)
LANGUAGE SQL
BEGIN ATOMIC
  UPDATE
    tbl_atividades
  SET
    id_aluno = _id_aluno
  WHERE
    id_atividade = _id_atividade;
END;

CREATE FUNCTION fc_obter_contagem_alunos()
RETURNS INT
LANGUAGE SQL
AS $$
  SELECT
    COUNT(*)
  FROM
    tbl_alunos
$$;

CREATE TABLE tbl_log_atividades (
  id_log_atividade SERIAL,
  id_aluno INT,
  id_atividade INT,
  nome_atividade TEXT,

  FOREIGN KEY (id_aluno) REFERENCES tbl_alunos(id_aluno),
  FOREIGN KEY (id_atividade) REFERENCES tbl_atividades(id_atividade)
);

CREATE OR REPLACE FUNCTION fc_log_mudancas_atividades()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
  BEGIN
    IF NEW.nome_atividade <> OLD.nome_atividade THEN
      INSERT INTO tbl_log_atividades (id_aluno, id_atividade, nome_atividade) VALUES
      (OLD.id_aluno, OLD.id_atividade, OLD.nome_atividade);
    END IF;

    RETURN NEW;
  END;
$$;

CREATE OR REPLACE TRIGGER tr_log_mudancas_atividades
BEFORE UPDATE ON tbl_atividades
FOR EACH ROW
EXECUTE FUNCTION fc_log_mudancas_atividades();

