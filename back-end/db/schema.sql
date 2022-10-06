DROP DATABASE IF EXISTS template_test_dev;
CREATE DATABASE template_test_dev;

\c template_test_dev;

DROP TABLE IF EXISTS test;

CREATE TABLE test (
    id SERIAL PRIMARY KEY, 
    name TEXT
);
