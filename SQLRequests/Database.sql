CREATE DATABASE VibeAndFlavor;
USE VibeAndFlavor;

CREATE TABLE Nations (
    Id int AUTO_INCREMENT,
    Nation VARCHAR(255),
    Continent VARCHAR(255),

    PRIMARY KEY (Id)
);

CREATE TABLE Dishes (
    Id int AUTO_INCREMENT,
    NationId int,
    Name int,
    Ingredients VARCHAR(255),
    Recipe VARCHAR(255),
    GoodAdress VARCHAR(255),
    History TEXT,
    CreationDate DATE,
    Price DECIMAL(10,2),
    Diet VARCHAR(255),

    PRIMARY KEY (Id),
    FOREIGN KEY (NationId) REFERENCES Nations(Id)
);

CREATE TABLE Musics (
    Id int AUTO_INCREMENT,
    NationId int,
    Name int,
    Style VARCHAR(255),
    Singer VARCHAR(255),
    Link VARCHAR(255),
    History TEXT,
    CreationDate DATE,

    PRIMARY KEY (Id),
    FOREIGN KEY (NationId) REFERENCES Nations(Id)
);

-- pour charger la BDD :

-- Table Nations :

-- importer format csv
-- Champs séparés par : ,
-- Champs entourés par : "
--Champs échappés par : \
--Lignes terminées par : \n

--Nom des colonnes : Nation,Continent

-- pour recuperer le plat d'un pays :

SELECT Dishes.* FROM Dishes JOIN Nations ON Dishes.NationId = Nations.Id WHERE Nations.Nation = 'France';