//Define una clase con métodos para interactuar con la tabla usuarios.

//Cada método ejecuta una consulta SQL.

//Se usa el patrón de callback para recibir los resultados.

const db = require('../db/conexion');

class UsuarioModel {
  obtenerTodos(callback) {
    const sql = `
      SELECT u.rut, u.nombre, u.email, r.nombre AS rol 
      FROM usuarios u 
      JOIN roles r ON u.rol_id = r.id`;
    db.query(sql, callback);
  }

  insertar(datos, callback) {
    db.query('INSERT INTO usuarios SET ?', datos, callback);
  }

  obtenerPorRut(rut, callback) {
    db.query('SELECT * FROM usuarios WHERE rut = ?', [rut], callback);
  }

  actualizar(rut, datos, callback) {
    db.query('UPDATE usuarios SET ? WHERE rut = ?', [datos, rut], callback);
  }

  eliminar(rut, callback) {
    db.query('DELETE FROM usuarios WHERE rut = ?', [rut], callback);
  }

  obtenerRoles(callback) {
    db.query('SELECT * FROM roles', callback);
  }
}

module.exports = new UsuarioModel();
