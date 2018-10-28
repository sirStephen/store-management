CREATE TABLE products(
  id SERIAL,
  "productName" character varying(50) not null,
  "price(N)" smallint not null,
  quantity smallint not null,
  "minQuantity" smallint not null,
  "createAt" timestamp
  -- CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE sales(
  id SERIAL,
  "productName" character varying(50),
  "price(N)" smallint not null,
  quantity smallint not null,
  "total(N)" smallint not null,
  "createAt" timestamp
  -- CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE users(
  id SERIAL,
  "firstName" character varying(250),
  "lastName" character varying(250),
  username text unique not null,
  password text,
  role character varying(50)
  -- CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE login(
  id SERIAL,
  username text unique not null,
  password text
  -- CONSTRAINT users_pkey PRIMARY KEY (id)
);

INSERT INTO products("productName", "price(N)", quantity, "minQuantity", "createAt")
VALUES('Bread', 300, 1, 3, 'NOW()');

INSERT INTO products("productName", "price(N)", quantity, "minQuantity", "createAt")
VALUES('Milk', 50, 1, 3, 'NOW()');

INSERT INTO products("productName", "price(N)", quantity, "minQuantity", "createAt")
VALUES('Sugar', 20, 1, 3, 'NOW()');

INSERT INTO sales("productName", "price(N)", quantity, "total(N)", "createAt")
VALUES ('Bread', 300, 2, 600, 'NOW()');

INSERT INTO sales("productName", "price(N)", quantity, "total(N)", "createAt")
VALUES ('Sugar', 20, 5, 100, 'NOW()');

INSERT INTO sales("productName", "price(N)", quantity, "total(N)", "createAt")
VALUES ('Bread', 300, 1, 300, 'NOW()');

INSERT INTO users("firstName", "lastName", username, password, role)
VALUES ('Gregory', 'Otiono', 'sir.gregg', 'password1', 'admin');

INSERT INTO users("firstName", "lastName", username, password, role)
VALUES ('Damian', 'Okoye', 'papi', 'password2', 'user');

INSERT INTO users("firstName", "lastName", username, password, role)
VALUES ('Eze', 'Ezekiel', 'ezecoder', 'password3', 'user');
