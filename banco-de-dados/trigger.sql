
  CREATE TABLE aluno (
  cod_matricula INT PRIMARY KEY,
  nome VARCHAR(255) not NULL,
  email VARCHAR(255) not NULL,
  data_nasc DATE,
  mensagem TEXT,
  endereco varchar(255)
);

CREATE TABLE materia (
  cod_materia SERIAL PRIMARY KEY,
  nome VARCHAR(255) not NULL
);

CREATE TABLE aluno_materia (
    cod_matricula INTEGER,
    cod_materia INTEGER,
    FOREIGN KEY (cod_matricula) REFERENCES aluno(cod_matricula),
    FOREIGN KEY (cod_materia) REFERENCES materia(cod_materia),
    PRIMARY KEY (cod_matricula, cod_materia)
);


INSERT INTO aluno (cod_matricula, nome, data_nasc, email, endereco) VALUES
  (1002, 'Pedro Henrique', '2000-09-25', 'pedrohenrique@gmail.com', 'rua pernambuco'),
  (1003, 'Luis Cesar', '2002-08-20', 'luiscezar@gmail.com', 'rua mato grosso'),
  (1004, 'Ana Júlia', '2000-10-03', 'anajulia@gmail.com', 'rua arnaldo borges'),
  (1005, 'Dener', '1999-02-14', 'dener@gmail.com', 'rua 13 de julho');
  
  INSERT INTO materia (nome) VALUES
  ('Linguagem de Programação 1' ),
  ('Estrutura de Dados'),
  ('Banco de Dados'),
  ('Programação Web');

  INSERT INTO aluno_materia (cod_materia, cod_matricula) VALUES
  (1, 1002),
  (2, 1002),
  (4, 1002),
  (2, 1003),
  (2, 1004),
  (3, 1004);


CREATE FUNCTION verifica_data_nasc()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.data_nasc IS NULL THEN
        NEW.mensagem = 'Atualize sua data de nascimento';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_verifica_data_nasc
BEFORE INSERT
ON aluno
FOR EACH ROW
EXECUTE FUNCTION verifica_data_nasc();

INSERT INTO aluno (cod_matricula, nome, email, endereco) VALUES
  (1009, 'pedro', 'pedro@gmail.com', 'rua taquarai');

SELECT * from aluno;


