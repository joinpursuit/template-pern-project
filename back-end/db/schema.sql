DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS boroughs;
DROP TABLE IF EXISTS lounges;

CREATE TABLE boroughs(
    id SERIAL PRIMARY KEY, 
    borough TEXT
);

CREATE TABLE lounges(
    id SERIAL PRIMARY KEY, 
    Photos TEXT,
    Borough TEXT,
    Zip_Code INTEGER,
    Lounge_Name Text NOT NULL,
    Phone_Number TEXT,
    Days_Closed TEXT,
    Street_Address Text NOT NULL, 
    Serves_Hookah Boolean Default True 
);
