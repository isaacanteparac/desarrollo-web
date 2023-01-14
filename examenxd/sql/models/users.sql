CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(200),
    lastname VARCHAR(200),
    email VARCHAR(255)
)