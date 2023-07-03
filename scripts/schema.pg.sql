DROP DATABASE IF EXISTS foodcalculation;
create database foodcalculation;
CREATE USER foodcalculation WITH PASSWORD 'foodcalculation';
GRANT ALL PRIVILEGES ON DATABASE foodcalculation to foodcalculation;
