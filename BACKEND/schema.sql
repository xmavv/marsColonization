CREATE DATABASE mars_colonization_2;
USE mars_colonization_2;

CREATE TABLE Users (
    id integer NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    level integer NOT NULL DEFAULT 1000,
    PRIMARY KEY (id),
    UNIQUE (username)
);

CREATE TABLE Buildings (
    id integer NOT NULL AUTO_INCREMENT,
    user_id integer,
    type ENUM('laboratory', 'farm', 'powerhouse', 'central', 'hydropolis'),
    level integer NOT NULL DEFAULT 1,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Workers (
    user_id integer,
    electricians integer NOT NULL DEFAULT 1,
    biologists integer NOT NULL DEFAULT 1,
    hydrologists integer NOT NULL DEFAULT 1,
    chemists integer NOT NULL DEFAULT 1,
    meteorologists integer NOT NULL DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Resources (
    user_id integer,
    coins integer NOT NULL DEFAULT 100,
    energy integer NOT NULL DEFAULT 50,
    food integer NOT NULL DEFAULT 50,
    water integer NOT NULL DEFAULT 50,
    oxygen integer NOT NULL DEFAULT 50,
    temperature integer NOT NULL DEFAULT -150,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Tasks (
    id integer NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    coins integer NOT NULL,
    workers integer NOT NULL,
    duration integer NOT NULL,
    type ENUM('energy', 'food', 'water', 'oxygen'),
    resources integer NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Users_Tasks (
    user_id integer,    
    task_id integer,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (task_id) REFERENCES Tasks(id)
);

CREATE UNIQUE INDEX idx_user_id_type
 ON Buildings(user_id, type);
