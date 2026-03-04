CREATE DATABASE VibeAndFlavor;
USE VibeAndFlavor;

CREATE TABLE Dishes (
    Id int UNIQUE AUTO_INCREMENT PRIMARY KEY,
    Nation VARCHAR(255),
    Ingredients VARCHAR(255),
    GoodAdress VARCHAR(255),
    History TEXT,
    CreationDate DATE,
    Price DECIMAL(10,2),
    Diet VARCHAR(255)
);

CREATE TABLE Musics (
    Id int UNIQUE AUTO_INCREMENT PRIMARY KEY,
    Nation VARCHAR(255),
    Style VARCHAR(255),
    Singer VARCHAR(255),
    Link VARCHAR(255),
    History TEXT,
    CreationDate DATE
);