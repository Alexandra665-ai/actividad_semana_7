//Crea una conexión a la base de datos.
//Exporta esa conexión para ser usada en el modelo.
const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // tu clave
  database: 'Sistema'
});

conexion.connect((err) => {
  if (err) throw err;
  console.log('Conexión a la base de datos exitosa');
});

module.exports = conexion;
