DROP DATABASE IF EXISTS videojuegos;
CREATE DATABASE videojuegos;
USE videojuegos;

CREATE TABLE desarrollador (
    id INT PRIMARY KEY auto_increment,
    nombre VARCHAR(255)
);

INSERT INTO desarrollador (id, nombre) VALUES
(1, 'Nintendo'),
(2, 'Rockstar Games'),
(3, 'Mojang'),
(4, 'Epic Games');

CREATE TABLE juegos (
    id INT PRIMARY KEY auto_increment,
    nombre VARCHAR(255),
    anio INT,
    desarrollador INT,
    FOREIGN KEY (desarrollador) REFERENCES desarrollador(id)
);

INSERT INTO juegos (id, nombre, anio, desarrollador) VALUES
(1, 'Super Mario Bros', 1985, 1),
(2, 'The Legend of Zelda: Breath of the Wild', 2017, 1),
(3, 'Grand Theft Auto V', 2013, 2),
(4, 'Minecraft', 2011, 3),
(5, 'Fortnite', 2017, 4);

CREATE TABLE plataformas (
    id INT PRIMARY KEY auto_increment,
    nombre VARCHAR(255)
);

INSERT INTO Plataformas (id, nombre) VALUES
(1, 'Nintendo Entertainment System (NES)'),
(2, 'Nintendo Switch'),
(3, 'PlayStation 3'),
(4, 'PC'),
(5, 'Xbox One');

CREATE TABLE juegos_plataformas (
    id INT PRIMARY KEY auto_increment,
    id_juego INT,
    id_plataforma INT,
    FOREIGN KEY (id_juego) REFERENCES juegos(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_plataforma) REFERENCES plataformas(id) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO juegos_plataformas (id_juego, id_plataforma) VALUES
(1, 1),
(1, 2),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

CREATE TABLE usuarios (
    id INT PRIMARY KEY auto_increment,
    username VARCHAR(255),
    pass VARCHAR(255)
);

INSERT INTO usuarios (username, pass) VALUES
('jesus', 'jesus');