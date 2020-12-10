DROP DATABASE IF EXISTS hot_restaurant;

CREATE DATABASE hot_restaurant;

USE hot_restaurant;

CREATE TABLE customers
(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    last_name VARCHAR(30),
    first_name VARCHAR(30),
    email_address VARCHAR(50),
    contact_number INT
    
);



INSERT INTO customers (last_name, first_name, email_address, contact_number)
VALUES ('Capone', 'Al', 'alcapone@gmail.com', '07866666666'),
('Presley', 'Elvis', 'bigel@gmail.com', '07855555555'),
('Shakur', 'Tupac', '2pac@gmail.com', '07844444444'),
('Martin', 'Dean', 'dean@gmail.com', '07899999999'),
('Luciano', 'Lucky', 'lucky7@gmail.com', '07898787565'),
('Escobar', 'Pablo', 'pb@gmail.com', '07801010101'),
('Jagger', 'Mick', 'rollingpebbles@gmail.com', '07875894873'),
('Hendrix', 'Jimmy', 'jimmyhens@gmail.com', '0785873940485'),
('Sinatra', 'Frank', 'frankie@gmail.com', '078840987'),
('Marley', 'Bob', 'bigbob@gmail.com', '07898799909'),
('Einstein', 'Albert', 'clevervato@gmail.com', '07869876789'),
('Diego', 'Maradonna', 'ilovecocacola@gmail.com', '07869578659');