-- Active: 1700173611662@@127.0.0.1@3306
CREATE TABLE users (
  id TEXT PRIMARY KEY NOT NULL UNIQUE,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TEXT NOT NULL
);

INSERT INTO users (id, name, email, password, created_at)
VALUES
('u001', 'Fulano', 'fulano@email.com', 'fulano123', '2023-11-16T22:29:21.941Z'),
('u002', 'Ciclana', 'ciclana@email.com', 'ciclana00', '2023-11-15T22:29:21.941Z');

CREATE TABLE users_addresses (
  user_id TEXT NOT NULL,
  address TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

INSERT INTO users_addresses (user_id, address)
VALUES
('u001', 'Rua norte 3');

INSERT INTO users_addresses (user_id, address)
VALUES
('u001', 'Quadra 21, lote 2');