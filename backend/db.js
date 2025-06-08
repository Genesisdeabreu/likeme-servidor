const { Pool } = require('pg'); //aquí importamos Pool desde el paquete pg para poder crear una conexión con PostgreSQL

//creamos un nuevo pool de conexión con los datos de acceso a nuestra base de datos:
const pool = new Pool({
  user: 'postgres',           //mi usuario de PostgreSQL
  host: 'localhost',
  database: 'likeme',         //nombre de la base creada en PostgreSQL
  password: '1234',           //mi contraseña en PostgreSQL
  port: 5432,                 //puerto por defecto de PostgreSQL
});

//y luego exportamos el pool para poder usarlo en otros archivos como index.js:
module.exports = pool;


//Este archivo contiene la conexión a la base de datos de PostgreSQL usando el paquete pg
