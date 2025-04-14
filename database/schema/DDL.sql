-- Active: 1737758317608@@127.0.0.1@5432@joyas
-- Crear la base de datos
CREATE DATABASE joyas;

-- Conectarse a la base de datos
\c joyas;

-- Crear tabla inventario con clave primaria y mejor formato
CREATE TABLE inventario (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  categoria VARCHAR(50) NOT NULL,
  metal VARCHAR(50) NOT NULL,
  precio INT CHECK (precio >= 0),
  stock INT CHECK (stock >= 0)
);
