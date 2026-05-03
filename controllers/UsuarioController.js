//Define una clase controladora con métodos que responden a cada acción del CRUD.

//Interactúa con el modelo y renderiza vistas.

const Usuario = require('../models/UsuarioModel');

class UsuarioController {
  index(req, res) {
    Usuario.obtenerTodos((err, resultados) => {
      if (err) throw err;
      res.render('usuarios/index', { usuarios: resultados });
    });
  }

  crear(req, res) {
    Usuario.obtenerRoles((err, roles) => {
      if (err) throw err;
      res.render('usuarios/crear', { roles });
    });
  }

  guardar(req, res) {
    const datos = req.body;
    Usuario.insertar(datos, (err) => {
      if (err) throw err;
      res.redirect('/usuarios');
    });
  }

  editar(req, res) {
    const rut = req.params.rut;
    Usuario.obtenerPorRut(rut, (err, resultados) => {
      if (err) throw err;
      const usuario = resultados[0];
      Usuario.obtenerRoles((err2, roles) => {
        if (err2) throw err2;
        res.render('usuarios/editar', { usuario, roles });
      });
    });
  }

  actualizar(req, res) {
    const rut = req.params.rut;
    const datos = req.body;
    Usuario.actualizar(rut, datos, (err) => {
      if (err) throw err;
      res.redirect('/usuarios');
    });
  }

  eliminar(req, res) {
    const rut = req.params.rut;
    Usuario.eliminar(rut, (err) => {
      if (err) throw err;
      res.redirect('/usuarios');
    });
  }
}

module.exports = new UsuarioController();
