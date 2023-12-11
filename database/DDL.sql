CREATE DATABASE transporte_maple;

\c transporte_maple;

--Tabla usuarios
CREATE TABLE users (
    id                  SERIAL      PRIMARY KEY,
    name                VARCHAR(100) NOT NULL,
    email               VARCHAR(100) UNIQUE NOT NULL,
	gender              VARCHAR(10),
    phoneNumber         VARCHAR(20),
    password            VARCHAR(100) NOT NULL,
    termsAndConditions  BOOLEAN
);
