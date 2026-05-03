
const express = require('express');


const path = require('path');


const session = require('express-session');

const app = express();
const puerto = 3000;


app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de sesión
app.use(session({
  secret: 'clave_super_segura_123',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    maxAge: 1000 * 60 * 30
  }
}));


function verificarSesion(req, res, next) {
  if (req.session.usuario) {
    next();
  } else {
    console.log(`[${new Date().toLocaleString()}] Acceso denegado: ${req.path}`);
  
    res.send('Acceso denegado');
  }
}


const rutasUsuario = require('./routes/usuario');
app.use('/usuarios', verificarSesion, rutasUsuario);


const authRoutes = require('./routes/auth');
app.use('/', authRoutes);


app.listen(puerto, () => {
  console.log(`Servidor activo en http://localhost:${puerto}`);
});