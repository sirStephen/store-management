CREATE TABLE products(
  id SERIAL,
  productname character varying(50) not null,
  price smallint not null,
  quantity smallint not null,
  minquantity smallint not null,
  createat timestamp
);

CREATE TABLE sales(
  id SERIAL,
  productname character varying(50),
  price smallint not null,
  quantity smallint not null,
  total smallint not null,
  createat timestamp
);

CREATE TABLE users(
  id SERIAL,
  "firstName" character varying(250),
  "lastName" character varying(250),
  username text unique not null,
  password text,
  role character varying(50)
);

INSERT INTO products(productname, price, quantity, minquantity, createat)
VALUES('Bread', 300, 1, 3, 'NOW()');

INSERT INTO products(productname, price, quantity, minquantity, createat)
VALUES('Milk', 50, 1, 3, 'NOW()');

INSERT INTO products(productname, price, quantity, minquantity, createat)
VALUES('Sugar', 20, 1, 3, 'NOW()');

INSERT INTO sales(productname, price, quantity, total, createat)
VALUES ('Bread', 300, 2, 600, 'NOW()');

INSERT INTO sales(productname, price, quantity, total, createat)
VALUES ('Sugar', 20, 5, 100, 'NOW()');

INSERT INTO sales(productname, price, quantity, total, createat)
VALUES ('Bread', 300, 1, 300, 'NOW()');

INSERT INTO users("firstName", "lastName", username, password, role)
VALUES ('Gregory', 'Otiono', 'sir.gregg', '$2b$10$Lmvi6nA4NxP3Iob1FfMG6O0qUGMUlDeQbwVbMMSSjaH/K0TO7Diku', 'admin');

INSERT INTO users("firstName", "lastName", username, password, role)
VALUES ('Damian', 'Okoye', 'papi', '$2b$10$SeJk28hwwdbUkv992mA0Re5L1B8MUwnCaBzl01zP2cyXgQAfOJhh6', 'user');

INSERT INTO users("firstName", "lastName", username, password, role)
VALUES ('Eze', 'Ezekiel', 'ezecoder', '$2b$10$JJP3ZF53LsBgTRaFDDnRmulUwcfYPGSG3SRia5IeydkVTVrshtBzy
', 'user');
