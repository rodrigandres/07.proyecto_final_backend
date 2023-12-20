CREATE DATABASE transporte_maple_proyectodf;

\c transporte_maple_proyectodf;

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


--tabla de cotizaciones
CREATE TABLE quotations (
    id                  SERIAL          PRIMARY KEY,
    distanceText        VARCHAR(100),
    distanceValue       NUMERIC(10, 2),
    label               VARCHAR(100),
    name                VARCHAR(100),
    toLabel             VARCHAR(100),
    toName              VARCHAR(100),
    userId              INTEGER         REFERENCES users(id), -- Clave foránea en user_id
    userEmail           VARCHAR(100)    REFERENCES users(email), -- Clave foránea en email
    created_at          TIMESTAMP       DEFAULT NOW()
);