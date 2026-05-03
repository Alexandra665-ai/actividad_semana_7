const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

router.get('/', UsuarioController.index);
router.get('/crear', UsuarioController.crear);
router.post('/guardar', UsuarioController.guardar);
router.get('/editar/:rut', UsuarioController.editar);
router.post('/actualizar/:rut', UsuarioController.actualizar);
router.get('/eliminar/:rut', UsuarioController.eliminar);

module.exports = router;

//Define las rutas del CRUD:

// → listar

//crear → formulario

//guardar → guardar nuevo

///editar/:id → formulario editar

///actualizar/:id → guardar edición

///eliminar/:id → eliminar